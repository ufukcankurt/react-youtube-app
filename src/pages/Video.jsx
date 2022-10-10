import React from 'react'
import styled from 'styled-components'

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../components/Comments';
import Card from "../components/Card";

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

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`
const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`
const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.text};
`
const ChannelName = styled.span`
    font-weight: 500;
`

const ChannelCounter = styled.span`
    color: ${({ theme }) => theme.textSoft};
    margin-top: 5px;
    margin-bottom: 20px;
    font-size: 12px;
`

const Description = styled.p`
    font-size: 14px;
`

const Subscribe = styled.button`
    background-color: #cc1a00;
    font-weight: 500;
    color: #fff;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
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
                <Channel>
                    <ChannelInfo>
                        <Image src='https://yt3.ggpht.com/ytc/AMLnZu94pzTFiSDqYIvXn40JdctQCOxK2fnAMEy0zdL6kA=s68-c-k-c0x00ffffff-no-rj' />
                        <ChannelDetail>
                            <ChannelName>Code With Akash</ChannelName>
                            <ChannelCounter>1.2M subscribers</ChannelCounter>
                            <Description>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur error atque nulla adipisci quas ex doloremque officia accusamus iure fuga autem officiis veniam quam maiores, porro reprehenderit quo qui labore?
                            </Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe> SUBSCRIBE</Subscribe>
                </Channel>
                <Hr />
                <Comments />
            </Content>
            <Recommendation>
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
            </Recommendation>
        </Container>
    )
}

export default Video