import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import post from "../../public/images/post.jpeg"
import { orange } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Post({id}) {


  return (
    <Card sx={{ maxWidth: 600, marginTop:3 ,marginBottom:2}}>
        <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: orange }} aria-label="recipe">
            R
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
            </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        />
        <CardMedia
        component="img"
        height="400"
        image={post}
        alt="Paella dish"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
            <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
            <ShareIcon />
        </IconButton>
        </CardActions>
  </Card>
  )
}

export default Post