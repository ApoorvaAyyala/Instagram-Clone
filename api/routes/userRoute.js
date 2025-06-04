const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User");

router.get("/:id", (req, res) => {
    
    const id = req.params.id;
    
    User.find({_id:id},function(data,err){
         if(!err){
           res.status(200).json(data);
         }
         else{
            res.status(400).json(err);
         }
    });

});

router.post("/register",async(req,res)=>{
   
   try{
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(200).json(user);
   }
   catch(err) {
   console.log(err);
    }

})

router.post("/login",async(req,res)=>{

        try {
            const user = await User.findOne({ email: req.body.email });
            if(!user){
                 res.status(400).json({error : "user not found"});
            }
        
            if(user.password !== req.body.password){
                res.status(400).json({error : "wrong password"});
           }
            res.status(200).json(user)
          } catch (err) {
            res.status(500).json(err)
          }
})


module.exports =  router;

