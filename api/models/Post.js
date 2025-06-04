const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: Buffer,
      required: true,
    },
    likes: {
       type:Number,
       default:0
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
