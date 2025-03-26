import mongoose from "mongoose";

const feedbackSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide your name'],
    },
    feedback:{
        type:String,
        required:[true, "please provide your feedback :)"],
    }
})
export default mongoose.model('Feedback',feedbackSchema)