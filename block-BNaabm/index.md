writeCode

Create a basic express server

- add listener on port 4000
- create a custom app level middleware which consoles request `url` and `method` and passes executio to next middleware in line.


// var express = require("express");
// var app = express();

// function logger(req,res,next){
//     console.log(req.method, req.url);
//     next();
// }
// app.use('/', logger);

// app.use("/admin", (req,res ,next)=>{
//     console.log(req.method, req.url);
//     next();
// })
// app.get('/', (req,res)=>{
//     res.send('welcome');
// })

// app.listen(4000, ()=>{
//     console.log('server is listening at 4k');
// })