const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');

// add urlencoded middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// define the home route
app.get('/', (req, res) => {
  res.render('index');
});

// create a /greeting POST route with a `name` parameter
app.post('/greeting', (req, res) => {
  const name = req.body.name;
  res.render('greeting', { name });
});

// create a /greeting route that accepts a name parameter
app.get('/greeting/:name', (req, res) => {
  const name = req.params.name;
  res.render('greeting', { name });
});

// start the server on port 8080
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
module.exports = app;
