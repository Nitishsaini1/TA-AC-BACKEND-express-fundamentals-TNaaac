var express = require('express');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.use(cookieParser());

app.use('/about', (req, res, next) => {
    res.cookie('username', 'nitish'); 
    next();
});

app.use((req, res, next) => {
    console.log('Cookies: ', req.cookies);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

app.get('/about', (req, res) => {
    res.send('About page - Cookie has been set.');
});

app.listen(3000, () => {
    console.log(`Server is listening on port 3k`);
});
