'use strict';
const express = require('express');
const router = express();

//로그인 검사해주는 routes
router.post('/local',(req,res) => {
    console.log(`입력받은 값 >> ${req.body.userID}, ${req.body.userPW}`);
    
})

module.exports = router;