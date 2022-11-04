import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Search = () => {
    const FETCH = process.env.REACT_APP_FETCH_PATH;
    const [videos, setVideos] = useState([]);
    const query = useLocation().search; 

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await axios.get(`${FETCH}videos/search${query}`);
            setVideos(res.data);
        };
        fetchVideos();
    }, [query, FETCH]);

    return <Container>
        {videos.map(video => (
            <Card key={video._id} video={video} />
        ))}
    </Container>;
};

export default Search;
