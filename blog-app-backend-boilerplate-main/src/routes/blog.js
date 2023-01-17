const router = require('express').Router();
const Blog = require('../models/Blog')
const bodyparser=require("body-parser");
// Your routing code goes here

router.use(bodyparser.json());



router.use(bodyparser.json());

router.get('/blog',async(req,res)=>{
    
    try{

const blog=await Blog.find()
res.json({
    status:"Success",
   blog
    
})
    }
    catch(e)
    {
        console.log(e.message);
    }
})


router.post('/blog',async(req,res)=>{
    try{

 const blog=await Blog.create(req.body)
            res.json(
                {
                    status:"success",
                    blog
                }
            )
        }
    
    
    catch(e)
    {
        console.log(e.message);
    }
})
router.put('/blog/:id',async(req,res)=>{
    try{
    const blogs=await Blog.updateOne({_id: req.params.id},req.body);
res.json({
    status:'Success',
    blogs: blogs
})
    }
    catch(e)
    {
        console.log(e.message);
    }
})


router.delete('/blog/:id',async(req,res)=>{
    try{
    const blogs=await Blog.deleteOne({_id: req.params.id});
res.json({
    status:'Success',
    blogs: blogs
})
    }
    catch(e)
    {
        console.log(e.message);
    }
})


router.get('/blog',(req,res)=>{
    res.json({ok:'blog'})
})


module.exports = router;