const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

router.get("/posts/:id", (req, res) => {
    
    const id = req.params.id;
    
    Post.findMany({_id:id},{img:1},function(data,err){
         if(!err){
            res.status(200).json(data);
         }
         else{
            res.status(400).json(err);
         }
    });

});

router.post("/post",(req,res)=>{
      const {id,img,desc} = req.body;

      const newPost = new Post(
        {
            userId:id,
            desc:desc,
            img:img,
        }
      );
      Post.insertOne(newPost);
})



module.exports =  router;



router.get("/feed/:id", (req, res) => {
    
    const id = req.params.id;
    
    User.find({_id:id},function(data,err){
         if(!err){
            
         }
         else{
            res.status(400).json(err);
         }
    });

});



module.exports =  router;

