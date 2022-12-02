import React, { useState } from 'react'
import styled from 'styled-components'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import { auth, provider } from '../firebase'
import { signInWithPopup } from "firebase/auth"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({ theme }) => theme.text};
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgLighter};
    border: 1px solid ${({ theme }) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`

const Title = styled.h1`
    font-size: 24px;
`

const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
`

const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
    color: ${({ theme }) => theme.text};
`

const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 500;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.textSoft};
`

const More = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.textSoft};
`

const Links = styled.div`
    margin-left: 50px;
`

const Link = styled.span`
    margin-left: 30px;
`

const Alert = styled.span`
    width: 100%;
    position: absolute;
    bottom: -47px;
    padding: 10px 20px;
    text-align: center;
    color: white;
    background-color: #089463;
`

const Signin = () => {

    const [name, setName] = useState("");
    const [nameSignIn, setNameSignIn] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordSignIn, setPasswordSignIn] = useState("");
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart())
        try {
            const res = await axios.post(`/auth/signin`, {
                name: nameSignIn,
                password: passwordSignIn,
            });
            dispatch(loginSuccess(res.data))
            res.status === 200 && window.location.replace("/");
        } catch (err) {
            dispatch(loginFailure())
        }
    }

    const signUp = async () => {
        try {
            const res = await axios.post("/auth/signup", {
                name,
                email,
                password,
            })

            if (res.status === 200) {
                setMessage("Account created successfully")
                setName("")
                setEmail("")
                setPassword("")
            }

        } catch (error) {
            console.log(error)
        }
    }

    const signinWithGoogle = async () => {
        dispatch(loginStart())
        signInWithPopup(auth, provider).then((result) => {
            axios.post(`auth/google`, {
                name: result.user.displayName,
                email: result.user.email,
                img: result.user.photoURL,
            }).then((res) => {
                dispatch(loginSuccess(res.data))
                res.status === 200 && window.location.replace("/");
            })
        }).catch((err) => {
            dispatch(loginFailure())
        })
    }

    return (
        <Container>
            <Wrapper>
                {message !== null && <Alert>{message}</Alert>}
                <Title>Sign In</Title>
                <SubTitle>Sign in to your account</SubTitle>
                <Input placeholder="username" value={nameSignIn} onChange={(e) => setNameSignIn(e.target.value)} />
                <Input type="password" value={passwordSignIn} placeholder="password" onChange={(e) => setPasswordSignIn(e.target.value)} />
                <Button onClick={handleLogin}>Sign in</Button>
                <Title>Or</Title>
                <Button onClick={signinWithGoogle}>Sigin with Google</Button>
                <Title>Or</Title>
                <Input placeholder="username" value={name} onChange={(e) => setName(e.target.value)} />
                <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={signUp} >Sign up</Button>
            </Wrapper>
            <More>
                English(USA)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
        </Container>
    )
}

export default Signin