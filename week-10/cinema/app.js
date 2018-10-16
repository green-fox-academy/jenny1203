const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mysql = require('mysql');
const path = require('path');
const assets = express.static('assets');

const PORT = 3010;
const app = express();

app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(assets);

const mySqlConn = mysql.createConnection({
  host: 'localhost',
  password: 'panda',
  user: 'root',
  database: 'cinema_booking',
  multipleStatements: true
});

mySqlConn.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('working');
  };
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/save', (req, res) => {
  let name = req.body.name;
  let phone = req.body.phone;
  let selectedMovie = req.body.selectedMovie;
  let glasses = req.body.glasses;
  let ticketPrice = req.body.ticketPrice;

  if (name && phone && selectedMovie && glasses && ticketPrice) {
    mySqlConn.query('INSERT INTO cinemaBooking(name, phone, selectedMovie, glasses, ticketPrice) VALUES(?,?,?,?,?);', [name, phone, selectedMovie, glasses, ticketPrice], (error, result) => {
      if (error) {
        console.log(error)
        res.status(500).send();
      } else {
        console.log(result);
        res.status(200).json(result);
      };
    });
  };
});

app.get('/reservations/:id', (req, res) => {
  res.sendFile(path.join(__dirname, "/assets/reservation.html"));
});

app.get('/api/reservations/:id', (req, res) => {
  let id = req.params.id;
  mySqlConn.query('SELECT * FROM cinemaBooking WHERE id=?;', [id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send();
    } else {
      console.log(result);
      res.status(200).json(result);
    };
  });
});

app.get('/reservations', (req, res) => {
  mySqlConn.query('SELECT * from cinemaBooking;', (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send();
    } else {
      res.status(200).json(result);
    };
  });
});

app.get('/top-movies', (req, res) => {
  mySqlConn.query('SELECT selectedMovie FROM cinemaBooking GROUP BY selectedMovie ORDER BY COUNT(*) DESC LIMIT 5 ;', (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send();
    } else {
      console.log(result);
      res.status(200).json(result);
    };
  });
});

app.listen(PORT, () => {
  console.log(`The app is runing on port ${PORT}`);
});
