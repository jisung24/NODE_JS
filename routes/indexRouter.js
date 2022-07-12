'use strict';
const express = require('express');
const router = express.Router();

router.get('/index',(req,res) => {
    res.render('index.ejs');
})
router.get('/sign-in/index',(req,res) => res.render('login.ejs'))

module.exports = router;