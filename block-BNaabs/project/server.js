const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
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
app.listen(3000, () => {
    console.log(`Server is listening on port 3k`);
});
