//  create a structure for data 
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//  create 2 examples for constructor in js 
//  understand what is constructor
const resume = new Schema({
    name:String,
    age:Number,
    email: String,

})

module.exports =  mongoose.model("resume", resume)


