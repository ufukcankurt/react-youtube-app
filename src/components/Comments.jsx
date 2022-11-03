import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Comment from './Comment'

import { useSelector } from "react-redux";

const Container = styled.div`
    
`
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
`

const Comments = ({ videoId }) => {
    const FETCH = process.env.REACT_APP_FETCH_PATH;
    const { currentUser } = useSelector(state => state.user)

    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`${FETCH}comments/${videoId}`)
                setComments(res.data)
            } catch (error) {

            }
        }
        fetchComments()
    }, [videoId])

    return (
        <Container>
            <NewComment>
                <Avatar src={currentUser.img} />
                <Input placeholder='Add a comment...' />
            </NewComment>
            {comments.map((comment) => (
                <Comment key={comment._id} comment={comment} />
            ))}

        </Container>
    )
}

export default Comments