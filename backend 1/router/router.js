import express from 'express'

const router=express.Router()

router.get('/',(req,res)=>{
    res.render('home')
    // res.send("hiiii form home")
})
router.get('/about',(req,res)=>{
    res.render('about')
    // res.send("hiiii form home")
})
router.get('/service',(req,res)=>{
    res.render('service')
    // res.send("hiiii form home")
})
router.get('/contact',(req,res)=>{
    res.render('contact')
    // res.send("hiiii form home")
})

export default router;