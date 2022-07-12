'use strict'; //일단 app.js에 전부 몰아넣자.. ==> 한 번 공부했던 모든 내용을 보고싶어...
const express = require('express');
const parseURL = require('parseurl'); //이건 뭐지...? 
const session = require('express-session'); //session모듈 설치!
const db = require('./db');
const app = express();
    

const authRouter = require('./routes/authRouter.js');
const indexRouter = require('./routes/indexRouter.js');
const itemRouter = require('./routes/itemRouter.js');

app.set('view engine','ejs');
app.set('views','./views');
db();
app.use(session({ // 객체를 파라미터로 받는 session실행 middleware
    secret : 'keyboard cat', //반드시 포함. => 별도의 파일로 뺴서 관리해야하는 아주 중요한 property
    resave : false, // resave는 그냥 false로 => session저장소의 값을 저장하지않는다.
    //아직 이건 이해하기 어려워. => 그냥 일단 false로!
    saveUninitialized : true, 
    //session이 필요하기 전까지는 session을 구동시키지 않는다.
    //false를 하면 session을 무조건 가동시켜서 서버에 큰 부담을 준다. 
}))
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api/auth',authRouter);
app.use('/', indexRouter);
app.use('/items', itemRouter);


// ex) 1번들의 제목을 b로 수정해주세요! ==> 이걸 front에서 요청하면
// back이 그 요청을 rest api로 짜놓는거야! 
// 이 api(요청사항)을 사용하겠다고 요청이 오면 백은 이걸해라! 
// 일단 프론트 요청을 한글로 풀어써! => 그리고나서 api를 짜! 그럼 잘 해결 돼!

// 자 일단 시작하는 방법
// 프론트에서 요청이 있을거야. 이걸 한글로 풀어써봐.
// 그리고 그 요청에 대한 api를 만들어! 
// 그리고 front에서 요청을 보내는 방법을 코드로 짜!
// 이제 db포함 back에서 요청을 들어주는 코드를 짜! 
// 크게보면 이렇게! 
// 예시) 나 /index페이지 들어가서 볼래!

module.exports = app;