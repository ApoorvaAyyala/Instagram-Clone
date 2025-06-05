import { Avatar, Container, Typography } from '@mui/material'
import profile from '../../public/images/profile.jpeg'
import React from 'react'
import Post from '../Feed/Post'

function Prof({id}) {
  return (
    <div>
       <Container sx={{marginLeft:"30rem",backdropFilter:"inherit"}} >
          <div className='p-5 banner'>

          </div>
          <div>
              <Avatar
                src={profile}
                alt="profile-image"
                sx={{width:"100px",height:"100px",top:"-3rem",left:"2rem"}}
              />
              <div className='profile-details'>
              <Typography variant="h5" color="initial" >
              {id}
              </Typography>
              <Typography variant="secondary.text" color="initial" >
              Gwalior
              </Typography>  
              </div>
              <div className='p-5 ms-2'>
                  <Post/>
                  <Post/>
                  <Post/>
                  <Post/>
              </div>
          </div>
       </Container>
    </div>
  )
}

export default Prof
