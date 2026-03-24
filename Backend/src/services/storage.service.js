
const ImageKit=require("@imagekit/nodejs");


const imagekit=new ImageKit({
    privateKey:process.env.IMAGE_KITT
})

async function upLoadfile(buffer){
    const response = await imagekit.files.upload({
  file: buffer.toString("base64"),
  fileName: 'image.jpg',
});
   return response;
}

module.exports=upLoadfile;