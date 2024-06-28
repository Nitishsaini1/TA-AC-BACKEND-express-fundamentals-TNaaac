var express = require('express');
var logger = require('morgan')
var cookieparser = require('cookie-parser');
var app = express();
app.use(logger('dev'));
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//routes
app.get('/', (req,res )=>{
    res.send('<h2>Welcome to Express</h2>');
});
app.get('/about', (req,res)=>{
    res.send('My name is qwerty');
});
app.post('/form',(req,res )=>{
    res.json(req.body);
});
app.post('/json', (req,res)=>{
    res.cookie('/myCookie', 'cookieValue');
});
app.post('/json', (req,res)=>{
    res.cookie(JSON,stringify(req.body));
});
//middleware to send a cookie


app.use((req,res,next)=>{
    res.cookie('myCookie','cookieValue');
    next();
});

var router = express.Router();
router.get('/users/:username',(req,res)=>{
    const username = req.params.username;
    res.send('<h2>Username : ${username}</h2>')
})
app.use(router);

//404 handler
app.use((req,res,next)=>{
    res.status(404).send('Page not found');
})

//500 error handler
app.use((err,req,res,next)=>{
res.status(500).send("Error : ${err.message}");
})

//port
app.listen(3000, ()=>{
    console.log("server listening on port 3k")

})