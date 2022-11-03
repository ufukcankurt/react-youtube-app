import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import Comments from '../components/Comments';
import Card from "../components/Card";

import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { dislike, fetchSuccess, like } from '../redux/videoSlice';
import { format } from 'timeago.js';


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
    const FETCH = process.env.REACT_APP_FETCH_PATH;
    const { currentUser } = useSelector(state => state.user)
    const { currentVideo } = useSelector(state => state.video)
    const dispatch = useDispatch();

    const path = useLocation().pathname.split("/")[2];

    const [channel, setChannel] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videoRes = await axios.get(`${FETCH}videos/find/${path}`)
                console.log("videoRes", videoRes)
                console.log("videoResuserId", videoRes.userId)
                const channelRes = await axios.get(`${FETCH}users/find/${videoRes.data.userId}`)


                console.log("channelRes", channelRes)

                setChannel(channelRes.data);
                dispatch(fetchSuccess(videoRes.data))
            } catch (error) {

            }
        }
        fetchData();

    }, [path, dispatch, FETCH])

    const handleLike = async () => {
        await axios.put(`${FETCH}users/like/${currentVideo._id}`)
        dispatch(like(currentUser._id))
    }

    const handleDislike = async () => {
        await axios.put(`${FETCH}users/dislike/${currentVideo._id}`)
        dispatch(dislike(currentUser._id))
    }

    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/jsZoR1kkq6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </VideoWrapper>
                <Title>{currentVideo.title}</Title>
                <Details>
                    <Info>{currentVideo.views} views • {format(currentVideo.createdAt)}</Info>
                    <Buttons>
                        <Button onClick={handleLike}>
                            {currentVideo.likes?.includes(currentUser._id) ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />} {currentVideo.likes?.length}
                        </Button>
                        <Button onClick={handleDislike}>
                            {currentVideo.dislikes?.includes(currentUser._id) ? <ThumbDownIcon /> : < ThumbDownOutlinedIcon />} Dislike
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
                        <Image src={channel?.img} />
                        <ChannelDetail>
                            <ChannelName>{channel.name}</ChannelName>
                            <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
                            <Description>
                                {currentVideo.description}
                            </Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe> SUBSCRIBE</Subscribe>
                </Channel>
                <Hr />
                <Comments />
            </Content>
            {/* <Recommendation>
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
            </Recommendation> */}
        </Container>
    )
}

export default Video