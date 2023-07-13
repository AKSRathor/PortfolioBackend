const mongoose = require('mongoose');
const { Schema } = mongoose

const hireMeSchema = new Schema({
    recName: {
        type: String,
        require: true
    },
    recPesha: {
        type: String,
        require: true
    },
    recCompany: {
        type: String,
        require: true
    },
    jobOffering: {
        type: String,
        require: true
    },
    anythingElse: {
        type: String,
    },
    recEmail: {
        type: String,
        require: true
    },
    recPhone: {
        type: String,
    },
    greeting1: {
        type: String,
    },
    greeting2: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("HireMe", hireMeSchema)