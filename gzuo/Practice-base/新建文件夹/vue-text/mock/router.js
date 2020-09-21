const express = require("express");
const router = express.Router();

router.post("/login",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    if(username === 'iwen' && password === '123'){
        res.send({
            msg:'登陆成功',
            username:'iwen',
            token:"2534TRGEW345YRTHGEWR324TERHT"
        })
    }else{
        res.send({
            msg:"登陆失败"
        })
    }
})

module.exports = router;
