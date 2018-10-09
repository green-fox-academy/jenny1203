'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mysql = require('mysql');
const path = require('path');
const assets = express.static('assets');

const PORT = 3000;
const app = express();

app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(assets);

const mySqlConn = mysql.createConnection({
  host: 'localhost',
  password: 'panda',
  user: 'root',
  database: 'formpractice',
  multipleStatements: true
});

mySqlConn.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('working');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/datas', (req, res) => {
  mySqlConn.query(`SELECT * FROM formdatas;`, (err, datas) => {
    if (err) {
      res.status(400).json({ err: 'hiba' });
      console.log(err);
      return;
    } else {
      res.status(200).json(datas);
    }
  });
});

app.post('/add', (req, res) => {
  if (req.body.name, req.body.email, req.body.password) {
    mySqlConn.query(`INSERT INTO formdatas(name, password) VALUES (?,?)`, [req.body.name, req.body.password], (err, formResult) => {
      if (err) {
        res.status(400).json({ err: 'hiba' });
        console.log(err);
        return;
      } else {
        res.status(200).redirect('/');
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`The app is runing on port ${PORT}`);
});
