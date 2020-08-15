'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

var port = process.env.PORT || 4000;

var userRouter = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', userRouter);
app.get('/',(req,res) => {
    res.json({ message: "Api Auth" })
});

app.listen(port ,() =>{
  console.log(`Api runnig for port ${process.env.PORT}`);
})
