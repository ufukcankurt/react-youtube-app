import React, { useState } from 'react'
import styled from 'styled-components'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import { auth, provider } from '../firebase'
import {signInWithPopup} from "firebase/auth"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({ theme }) => theme.text};
`

const Wrapper = styled.div`
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

const Signin = () => {
    const FETCH = process.env.REACT_APP_FETCH_PATH

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart())
        try {
            const res = await axios.post(`${FETCH}auth/signin`, {
                name,
                password,
            });
            dispatch(loginSuccess(res.data))
        } catch (err) {
            dispatch(loginFailure())
        }
    }

    const signinWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, provider)
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <SubTitle>Sign in to your account</SubTitle>
                <Input placeholder="username" onChange={(e) => setName(e.target.value)} />
                <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={handleLogin}>Sign in</Button>
                <Title>Or</Title>
                <Button onClick={signinWithGoogle}>Sigin with Google</Button>
                <Title>Or</Title>
                <Input placeholder="username" onChange={(e) => setName(e.target.value)} />
                <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <Button >Sign up</Button>
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