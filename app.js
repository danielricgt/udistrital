'use strict'
const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');
app.use(cors())

var port = process.env.PORT || 4000;

var userRouter = require('./routes/user');
var dependenceRouter = require('./routes/dependence');
var goodRouter =  require('./routes/good');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', userRouter);
app.use('/api',dependenceRouter);
app.use('/api', goodRouter);

app.get('/',(req,res) => {
    res.json({ message: "Api Auth" })
});

app.listen(port ,() =>{
  console.log(`Api runnig for port ${process.env.PORT}`);
})
