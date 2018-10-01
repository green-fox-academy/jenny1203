const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const conn = mysql.createConnection(
  {
    database: 'marvel',
    host: 'localhost',
    user: 'root',
    multipleStatements: true,
    password: ''
  }
);

conn.connect((err) => {
  //console.log(err);
});

app.get('/groot', (req, res) => {
  if (req.query.message) {
    conn.query("INSERT INTO heroes(name) VALUES(?);", [req.query.message], (err, result) => {
      res.status(200).json({
        received: req.query.message,
        translated: "I am Groot!"
      }).send();
    });
  } else {
    res.status(400).json({ error: "I am Groot!" }).send();
  }
});

app.post('/groot', (req, res) => {
  if (req.body.message) {
    console.log(req.body.message);
    conn.query(`SELECT * FROM heroes WHERE name LIKE '%${req.body.message}%';`, (err, result) => {
      console.log(result);
      res.status(200).json({
        heroesFound: result
      }).send();
    });
  } else {
    res.status(400).json({ error: "I am Groot!" }).send();
  }
});

const addTwoNumber = (n1, n2) => {
  return n1 + n2;
}

module.exports = { app, addTwoNumber };
/*
It should receives a query parameter: message=somemessage
And responds with a json object with a translated text like below:
*/
module.exports = app;