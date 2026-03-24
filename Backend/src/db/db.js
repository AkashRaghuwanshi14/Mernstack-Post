
const mongoose=require("mongoose");

// let connect database server to web server
async function connectDb(){
     await mongoose.connect(process.env.MONGO_URL)

     console.log("database is connected to web server");
}

module.exports=connectDb;
