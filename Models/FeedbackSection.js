const mongoose = require('mongoose');
const { Schema } = mongoose

const feedbackSchema = new Schema({
    feedback:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model("FeedbackSection", feedbackSchema)