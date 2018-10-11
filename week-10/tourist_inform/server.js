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
  database: 'AlopexOrientationExam',
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

app.get('/attractions', (req, res) => {
  mySqlConn.query(`SELECT * FROM attractions;`, (err, attractions) => {
    if (err) {
      res.status(400).json({ err: 'hiba' });
      console.log(err);
      return;
    } else {
      res.status(200).json(attractions);
    }
  });
});

app.post('/add', (req, res) => {
  if (req.body.attr_name, req.body.city, req.body.category,
    req.body.price, req.body.longitude, req.body.latitude,
    req.body.recommended_age, req.body.duration) {
    mySqlConn.query(`INSERT INTO attractions(attr_name, city, category,
       price, longitude, latitude, recommended_age, duration ) VALUES (?,?,?,?,?,?,?,?)`,
      [req.body.attr_name, req.body.city, req.body.category,
      req.body.price, req.body.longitude, req.body.latitude,
      req.body.recommended_age, req.body.duration], (err, formResult) => {
        if (err) {
          res.status(400).json({ err: 'hiba' });
          console.log(err);
          return;
        } else {
          res.status(200).json(formResult);
        }
      });
  }
});

app.get('/budge', (req, res) => {
  let categories = ['restaurant', 'museum', 'park'];
  let cheapestAttrs = [];
  categories.forEach(category => {
    mySqlConn.query(`select * from attractions where category=?`, [category], (err, budge) => {
      //promisokkal 
      let cheapest = budge[0];
      if (err) {
        res.status(400).json({ err: 'hiba a budgeben' });
        return;
      };

      for (let index = 0; index < budge.length; index++) {
        if (budge[index].price < cheapest.price) {
          cheapest = budge[index];
        };
      };
      cheapestAttrs.push(cheapest);
      console.log(cheapest);
    });
  });
  res.status(200).json({ cheapestAttrs });
});

app.delete('/delete/:id', (req, res) => {
  let deleteId = req.params.id;
  mySqlConn.query(`DELETE FROM attractions WHERE id=?`, [deleteId], (err, result) => {
    if(err) {
      res.status(400).json({ err: 'hiba a deletben' });
      return;
    } else {
      res.status(200).json(result);
    };
  });
});

app.listen(PORT, () => {
  console.log(`The app is runing on port ${PORT}`);
});
