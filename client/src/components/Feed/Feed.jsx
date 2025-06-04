import React  from 'react'
import Post from './Post'
import QuickPane from './QuickPane'
import Status from './Status'

function Feed() {
 
  // setuserData({name : "Arun" , age : 12});
  
  return (
    <div className='d-flex'>
        <div className='quick-links'>
        <QuickPane/>
        </div>
         <div className='post-area'>
         <Status/>
         <Post id={1}/>
         <Post id={2}/>
         <Post id={3}/>
         <Post id={4}/>
         </div>
         <div className='online-people'>

         </div>
    </div>
  )
}

export default Feed
