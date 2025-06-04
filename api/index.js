const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const multer = require("multer");
const path = require("path");
const userRoute = require("./routes/userRoute")
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors()) //cross origin allow all requests
app.use(bodyParser.urlencoded({extended: true})); //this is for formdata data
app.use(bodyParser.json()); //this is for body json data

app.use("/images", express.static(path.join(__dirname, "public/images")));

mongoose
  .connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(()=>{
     console.log("Backend Connected");
  }).catch((err)=>{
    console.log(err);
  })


app.use("/api",userRoute);

app.listen(5000, () => {
  console.log("API is Running");
});
