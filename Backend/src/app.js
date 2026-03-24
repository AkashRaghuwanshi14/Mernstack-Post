

const express=require("express");
const multer=require("multer");
const postmodel=require("./model/post.model");
const cors=require("cors");
const upLoadfile=require("./services/storage.service");
const app=express();

// middlewares
app.use(cors());
app.use(express.json());

// multer is also an middleware usauge=to read file as imag estore in form of file
const upload=multer({storage:multer.memoryStorage()});

app.post("/post-file",upload.single("image"),async(req,res)=>{
//   we take data from frontend and save it is in database 
//Through Post request we do datatransfromation take place form backend to frontend
// console.log(req.body);
    // this buffer is our actual image link or data
     const result=await upLoadfile(req.file.buffer);
    // console.log(result);
    const data=req.body;
   const post= await postmodel.create({
         image:result.url,
         caption:data.caption
    })

     res.status(201).json({
        message:"post created successfully",
        post
    })
})


// let call the database and fetch all post data from database server using get request and show it on the frontend

app.get("/post-file",async(req,res)=>{
    
    // we use find method
    const data= await postmodel.find();
    res.status(200).json({
        message:"data is fetched from database",
        data
    })
})


module.exports=app;