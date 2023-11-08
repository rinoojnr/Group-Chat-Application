const express = require('express');
const loginRouter = require('./Routes/login');
const chatRouter = require('./Routes/chat');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(chatRouter);
app.use(loginRouter);

app.listen(3001);