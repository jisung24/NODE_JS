'use strict';
const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.get('/index',(req,res) => {
    //전체상품 출력하는 index site출력!
    Item.find({})
    .then((itemsAll) => {
        console.log(itemsAll);
        res.render('index.ejs',{
            items : itemsAll, //arr안에다가 객체 4개! 
        });
    })
    .catch(err => console.log(err))
})
router.get('/sign-in/index',(req,res) => res.render('login.ejs'))

module.exports = router;