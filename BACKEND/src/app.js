const express = require('express') ;
const multer = require('multer') ;
const { uploadFile } = require('./storage/storage.service') ;
const postModel = require('./model/post.model') ;
const cors = require('cors')

const app = express() ;
app.use(cors()) ;
const upload = multer({storage : multer.memoryStorage()}) ;

app.post('/create-post' , upload.single("image") , async (req , res) => {
    console.log(req.body) ;
    console.log(req.file) ;

    const result = await uploadFile(req.file.buffer) ;
    const post = await postModel.create({
        image : result.url ,
        caption : req.body.caption 
    })
    res.status(201).json({
        message : "Post created succesfully" , 
        post
    });
})

app.get('/posts' , async(req , res)=>{
   const posts =  await postModel.find() ;

    res.status(200).json({
        message : "Notes fetched succesfully" ,
        posts
    })
})



module.exports = app ;