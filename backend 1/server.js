import express from 'express'
import router from './router/router.js';

const app=express();
app.use(router)
app.set('view engine','ejs')
app.use(express.static('public'))

app.listen(3000,()=>{
console.log("server on")
})
