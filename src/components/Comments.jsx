import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

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

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src="https://yt3.ggpht.com/ytc/AMLnZu94pzTFiSDqYIvXn40JdctQCOxK2fnAMEy0zdL6kA=s68-c-k-c0x00ffffff-no-rj" />
                <Input placeholder='Add a comment...' />
            </NewComment>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </Container>
    )
}

export default Comments