'use strict';
// /items 로 통일
const express = require('express');
const router = express.Router();
const Item = require('../models/item.js');

router.get('/index',(req,res) => {
    res.render('postItem.ejs');
})
router.get('/:id',(req,res)=>{
    console.log(`id가 ${req.params.id}인 상품 볼게요!`);
    res.render('items.ejs',{
        id : req.params.id,
    })
})
router.post('/',(req,res) => { //아이템 하나 만들어주세요! => 프론트는 html이건 js로 보내든 요청을 보내!!!
    //그럼 서버는 api를 만들어서 그 요청을 들어줘야 돼! 무조건
    console.log(`입력받은 값 >> ${req.body.title}, ${req.body.content}, ${req.body.price}`);
    const item = new Item({
        title : req.body.title,
        content : req.body.content,
        price : req.body.price,
    }) 
    .save()
    .then(() => {
        console.log(`db에 값 저장!`);
        return res.redirect('/index');
    })
    .catch(err => console.log(err))
})
router.delete('/:id',(req,res) => {
    // id선택한 상품 삭제! 
    
    console.log(`삭제한 상품 >> ${req.params.id}`);
    console.log(`삭제한 상품명 >> ${req.params.title}`);
    Item.deleteOne({_id : req.params.id})
    .then((item) => {
        console.log(`${item}삭제완료!`);
        res.render('index.ejs');
        //다만 fetch로 요청했을 때는 redirect가 안 돼!
        // 따라서 window.location.href까지 같이 써줘야돼! 
    })
}); 
module.exports = router;