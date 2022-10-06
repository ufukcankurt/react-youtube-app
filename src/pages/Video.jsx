import React from 'react'
import styled from 'styled-components'

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';

const Container = styled.div`
    display: flex;
    gap: 24px;
`

const Content = styled.div`
    flex: 5;
`

const VideoWrapper = styled.div`

`

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`

const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`

const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid ${({ theme }) => theme.soft};
`


const Recommendation = styled.div`
    flex: 2;
`

const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/jsZoR1kkq6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </VideoWrapper>
                <Title>How to make a YouTube clone with ReactJS</Title>
                <Details>
                    <Info>1.2M views • 2 years ago</Info>
                    <Buttons>
                        <Button>
                            <ThumbUpOutlinedIcon /> 123
                        </Button>
                        <Button>
                            <ThumbDownOutlinedIcon /> Dislike
                        </Button>
                        <Button>
                            <ReplyOutlinedIcon /> Share
                        </Button>
                        <Button>
                            <AddTaskOutlinedIcon /> Save
                        </Button>
                    </Buttons>
                </Details>
                <Hr />
            </Content>
            <Recommendation>Recommendation</Recommendation>
        </Container>
    )
}

export default Video