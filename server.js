const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const port  = process.env.PORT || 3000;

  app.use(express.static(__dirname + '/public'));
  app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
  });

app.listen(port, () => {
  console.log('Smile please: ', port);
});