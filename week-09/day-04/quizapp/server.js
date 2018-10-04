'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');
const myql = require('mysql');
const assets = express.static('assets');

const PORT = 5555;
const app = express();

app.use(jsonParser);
app.use(bodyParser.urlencoded({extended: false}));
app.use(assets);

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, "assets/quiz.html"));
});

app.listen(PORT, () => {
  console.log(`The app is runing on port ${PORT}`);
});