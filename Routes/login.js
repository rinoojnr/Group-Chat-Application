const express = require('express');
const router = express.Router();
const localStorage = require('../localStorage');




router.get('/login',(req,res,next)=>{
    res.send('<form action = "/logged"  method = "POST"><input type = "text" placeholder = "username" name = "user"><button type ="submit">Login</button></form>' )
})

router.post('/logged',(req,res,next)=>{
    localStorage.setItem('username', req.body.user);
    res.redirect('/');
})




module.exports = router;