const mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;
const cors = require('cors');

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'panda',
  database: 'bookstore',
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.use('/assets', express.static('assets'));
app.use(cors());
//Create an API endpoint that lists all book names
app.get('/', function(req, res) {
  conn.query('SELECT book_name FROM book_mast ;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
});
