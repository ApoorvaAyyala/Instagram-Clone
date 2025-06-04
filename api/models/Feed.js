const mongoose = require("mongoose");

const FeedSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    Post:{
        type:Array,
        default:[]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feed", FeedSchema);
