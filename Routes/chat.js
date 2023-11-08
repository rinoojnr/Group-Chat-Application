const express = require('express');
const router = express.Router();
const fs = require('fs');
const localStorage = require('../localStorage');


router.get('/',(req,res,next)=>{
    fs.readFile('chat',{encoding:'utf-8'},(err,data)=>{
        if(err){
            console.log('an error occur');
        }
        res.send(`${data}<form action = "/chat"  method = "POST"><input type = "text" placeholder = "message" name = "message"><button type ="submit">Send</button></form>` );
    })

})

router.post('/chat',(req,res,next)=>{
    fs.appendFileSync('chat',`${localStorage.getItem('username')} : ${req.body.message}`)
    res.redirect('/');
})


module.exports = router;