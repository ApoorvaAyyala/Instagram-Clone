import { Avatar, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import profile from "../../public/images/profile.jpeg"


function AvatarPro(){
     return (
        <div className='d-flex p-4'>
        <Avatar
            src={profile}
            alt="profile-image"

        />
        <Typography variant="h6" color="initial" className='ms-3'>
            Ashley
        </Typography>
        </div>
     )
}

function ChatPane() {
  return (
    <div className='p-5 '>
        <div className='search-freind'>
        <Link to="/" >
        <Button contained className='d-block mb-4'>Go Back</Button>
        </Link>
        <TextField
            placeholder="Search.."
            type="text"
        />
        </div>
        <div className='profile-scroll'>
        <AvatarPro/>
        <AvatarPro/>
        <AvatarPro/>
        <AvatarPro/>
        <AvatarPro/>
        <AvatarPro/>
        <AvatarPro/>
        <AvatarPro/>
        <AvatarPro/>
        <AvatarPro/>
        <AvatarPro/>
        <AvatarPro/>
        </div>
    </div>
  )
}

export default ChatPane
