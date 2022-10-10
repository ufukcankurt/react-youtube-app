import React from 'react'
import styled from 'styled-components'

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

const Comment = () => {
    return (
        <Container>
            <Avatar src="https://yt3.ggpht.com/ytc/AMLnZu94pzTFiSDqYIvXn40JdctQCOxK2fnAMEy0zdL6kA=s68-c-k-c0x00ffffff-no-rj" />
            <Details>
                <Name>John Doe <Date>1 month ago</Date></Name>
                <Text>Great video!</Text>
            </Details>
        </Container>
    )
}

export default Comment