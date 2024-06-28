const express = require('express');
const app = express();

app.use((req, res, next) => {
    if (req.url === "admin") {
      return next("Unauthorized");
    }
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/about', (req, res) => {
  res.send('About us page');
});

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3k`);
});
