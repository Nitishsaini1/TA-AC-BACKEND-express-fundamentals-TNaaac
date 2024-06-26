
var express = require("express");
var app = express();

function logger(req,res,next){
    console.log(req.method, req.url);
    next();
}
app.use('/', logger);

app.use("/admin", (req,res ,next)=>{
    console.log(req.method, req.url);
    next();
})
app.get('/', (req,res)=>{
    res.send('welcome');
})
app.get('/admin', (req,res)=>{
    res.send('admin page');
})
app.listen(4000, ()=>{
    console.log('server is listening at 4k');
})