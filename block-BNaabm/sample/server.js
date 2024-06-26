

var express = require("express");
var app = express();

// function logger(req,res,next){
//     console.log(req.method, req.url);
//     next();
// }
// app.use('/', logger);

app.use("/", (req,res ,next)=>{
    console.log(req.method, req.url);
    next();
})
app.get('/', (req,res)=>{
    res.send('welcome to server side ');
})

app.listen(4000, ()=>{
    console.log('server is listening at 4k');
})