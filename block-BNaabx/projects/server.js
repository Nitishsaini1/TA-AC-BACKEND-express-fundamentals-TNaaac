var express = require('express');
var logger = require("morgan");
var cookieparser = require("cookie-parser");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static());
app.use(cookieparser())

app.get('/',(req,res)=>{
    res.json(req.body)
})

app.listen(4000,()=>{
    console.log('listening to 4k')
})