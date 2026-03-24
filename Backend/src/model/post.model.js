
const mongoose=require("mongoose");

const postschema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    caption:{
        type:String
    }

})

const  postmodel=mongoose.model("post",postschema);

module.exports=postmodel;