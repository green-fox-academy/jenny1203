const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();

const PORT = 3007;

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'panda',
  database: 'reddit',
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db' + err);
    return;
  }
  console.log('Connection established');
});


app.get('/posts', function (req, res) {
  conn.query('SELECT * FROM posts;', function (err, rows) { //melyik oszlop tábla név
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.send(rows);
  });
});



app.post('/posts', jsonParser, (req, res) => {
  let title = req.body.title;
  let url = req.body.url;

  if (title && url) {
    conn.query(`INSERT INTO posts (Title, Url) VALUES ('${title}', '${url}')`, (err, result) => {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
      }
      let id = result.insertId;
      conn.query(`SELECT * FROM posts WHERE Id = ${id}`, (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.staus(500).send('Database error');
          return;
        } else {
          res.json(rows)
        }
      });
    });
  };
});



app.get('/hello', (req, rest) => {
  console.log('Hello');
})

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
});
