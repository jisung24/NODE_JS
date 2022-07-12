'use strict';
const app = require('../session.js');
require('dotenv').config({path : 'variables.env'})
const { PORT } = process.env;

app.listen(PORT, ()=> console.log(`${PORT}SERVER IS OPENED!`));