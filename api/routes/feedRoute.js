const router = require("express").Router();
const Feed = require("../models/Feed");

router.get("/feed/:id", (req, res) => {
    
    const id = req.params.id;
    
    Feed.findOne({_id:id},function(data,err){
         if(!err){
            res.status(200).json(data);
         }
         else{
            res.status(400).json(err);
         }
    });

});



module.exports =  router;
