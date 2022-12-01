import React, { useState } from 'react'
import styled from "styled-components"

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector } from "react-redux";
import Upload from './Upload';

const Container = styled.div`
position: sticky;
top: 0;
background-color: ${({ theme }) => theme.bgLighter};
height: 56px;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 100%;
padding: 0 20px;
position: relative;
`
const Search = styled.div`
width: 40%;
position: absolute;
left: 0px;
right: 0px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;
color: ${({ theme }) => theme.text};
`

const Input = styled.input`
border:none;
background-color: transparent;
outline: none;
color: ${({ theme }) => theme.text};
`

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`
const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  transition: .3s all ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`

const Navbar = () => {

  const navigate = useNavigate();

  const { currentUser } = useSelector(state => state.user)
  const [q, setQ] = useState("")
  const [open, setOpen] = useState(false)

  /**
   * When the user clicks the logout button, remove the local storage and reload the page.
   */
  const handleLogout = () => {
    localStorage.removeItem("persist:root");
    window.location.reload(false);
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder="Search" onChange={(e) => setQ(e.target.value)} />
            <SearchOutlinedIcon style={{ "cursor": "pointer" }} onClick={() => navigate(`/search?q=${q}`)} />
          </Search>
          {currentUser ? <User>
            <IconContainer>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
            </IconContainer>

            <Avatar src={currentUser.img} />
            {currentUser.name}
            <IconContainer><LogoutIcon onClick={handleLogout} /></IconContainer>

          </User> : <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button> <AccountCircleOutlinedIcon /> SIGN IN</Button>
          </Link>}
        </Wrapper>
      </Container>
      {open && < Upload setOpen={setOpen} />}
    </>
  )
}

export default Navbar