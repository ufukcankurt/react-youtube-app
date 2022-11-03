import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.text};
`

const Name = styled.span`
    font-weight: 500;
    font-size: 13px;
`

const Date = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.textSoft};
    font-weight: 400;
    margin-left: 5px;
`

const Text = styled.span`
    font-size: 14px;`

const Comment = ({ comment }) => {
    const FETCH = process.env.REACT_APP_FETCH_PATH;
    const [channel, setChannel] = useState({})

    useEffect(() => {
        const fetchComment = async () => {
            const res = await axios.get(`${FETCH}users/find/${comment.userId}`)
            setChannel(res.data)
        }
        fetchComment();
    }, [comment.userId])

    return (
        <Container>
            <Avatar src={channel.img} />
            <Details>
                <Name>{channel.name} <Date>{format(comment.createdAt)}</Date></Name>
                <Text>{comment.desc}</Text>
            </Details>
        </Container>
    )
}

export default Comment