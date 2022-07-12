const mongoose = require('mongoose');
require('dotenv').config({ path : 'variables.env'});
const { DB } = process.env;

module.exports = () => {
  function connect() {
    mongoose.connect(DB,{UseNewUrlParser : true})
    .then(() => console.log('db connected successfully!'))
    .catch((err) => console.log(err))
  }
  connect();
  mongoose.connection.on('disconnected', connect);
  //해제 됐을 때.. 다시 연결시켜줌! 
};