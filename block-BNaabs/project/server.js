// var express = require('express');
// var logger = require('morgan');
// var cookieparser = require('cookie-parser');

// var app = express();
// app.use(logger('dev'));
// app.get('/', (req, res) => {
//     res.sendFile((__dirname + '/index.html'));
// });
// app.get('/new', (req, res) => {
//     res.sendFile((__dirname + '/new.html'));
// });
// app.post('/new', (req, res) => {
//     const { name, email } = req.body;
//     res.send(`Form submitted! Name: ${name}, Email: ${email}`);
// });
// app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User ID: ${userId}`);
// });
// app.listen(3000, () => {
//     console.log(`Server is listening on port 3k`);
// });


var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// Middleware
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/new', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'new.html'));
});

app.post('/new', (req, res) => {
    const { name, email } = req.body;
    res.send(`Form submitted! Name: ${name}, Email: ${email}`);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Start the server
app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});

