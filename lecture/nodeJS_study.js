'use strict';
/** 공부 순서
// ===== << 프론트엔드 개발자가 알아야 할 최소한의 백엔드 지식 >> =====
// 1. 서버가 html파일을 웹브라우져에 보내준다.
// => 우리가 주소를 입력하면 서버에서 res객체에 담아서 웹 브라우져에 보내준다. 
// => express설치 

// 2. CRUD API작성 내용.
// EX) 프론트가 ID가 1번인 글의 제목을 수정해주세요! 요청을 보내!
// 그럼 그 요청을 BACK에서 미리 짜 놓는거야!
// 사실상 API는 프론트가 보낸 요청을 쓰고 그거에 대한 CONTROLLER을 짜 놓는거!
// 그 API를 RESTFUL하게 써 놓은게 REST API라고 부른다. 
// 
// 프론트에서 
// ID가 3번인 상품 보여주세요! 라고 GET요청을 날리면 
// 백에서는 저 요청에 대한 API를 짜 놔!
// GET : /items/3 => res. ~~~ 이런식으로! 
// 따라서 프론트 요청을 api만 보고도 알 수 있게 api를 깔끔하게 짜놔야돼!
// 그걸 rest api라고 불러!  
//
*/ 










// 0. 노드js 프레임워크 공부
// 1. express라이브러리 공부.
// 2. 템플릿 엔진 공부 => views에서 필요(ex) => ejs등등.. )
// 3. db(나는 mongoose, mongoDB)를 이용한 crud공부
// 4. ajax(매우중요!) => fetch, axios library, jquery library
// 5. multer를 통한 파일 업로드!
// 6. Authentication(인증) => 로그인 회원가입 인증!
//    ==> passport, session, cookie, and so on...
// 7. 보안
//    ==> csurf로 xss공격 막기, 단방향해시(csurf)를 활용한 암호화.
// 8. 실시간 서비스
//    ==> Socket.io
// 9. call back개선
//    ==> Promise async await
//10. 크롤링
//    ==> request, cheerio