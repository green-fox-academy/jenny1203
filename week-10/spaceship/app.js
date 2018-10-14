'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mysql = require('mysql');
const path = require('path');
const assets = express.static('assets');

const PORT = 3060;
const app = express();

app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(assets);

const mySqlConn = mysql.createConnection({
  host: 'localhost',
  password: 'panda',
  user: 'root',
  database: 'space',
  multipleStatements: true
});

mySqlConn.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('working');
  }
});

app.get('/tableInfo', (req, res) => {
  mySqlConn.query('SELECT planet.id, planet.name, planet.population, spaceship.max_capacity, spaceship.planet, spaceship.utilization FROM planet LEFT JOIN spaceship ON name = planet;', (error, result) => {
    if(error) {
      console.log(error);
      res.status(500).send();
    } else {
      console.log(result);
      res.status(200).json(result);
    };
  });
});



app.get('/planets', (req, res) => {
  mySqlConn.query('SELECT name FROM planet;', (error, result) => {
    if(error) {
      console.log(error);
      res.status(500).send();
    } else {
      console.log(result);
      mySqlConn('SELECT planet from spaceship;', (errorSpace, resultSpace) => {
        if(result === resultSpace) {
          console.log(result,resultSpace);
        };
      });
      res.status(200).json(result);
    };
  });
});

app.post('/movehere/:planet_id', (req, res) => {
  let planetId = req.params.planet_id;
  if (planetId) {
    mySqlConn.query('SELECT * FROM planet WHERE id=?;', [planetId], (error, result) => {
      console.log(result);
      if(error){
        console.log(error);
        res.send(500).send();
      } else {
        let name = result[0].name
        let capacity = 60;
        let utilization = 0;
        mySqlConn.query(`INSERT INTO spaceship(max_capacity, planet, utilization ) VALUES (?,?,?)`, [capacity, name, utilization], (errInsert, resInsert) => {
          if(errInsert) {
            console.log(errInsert);
            res.status(500).json({"result": "error"});
          } else {
            res.status(200).json({"result": "success"});
          };
        });
      };
    });
  }
});

app.post('/toship/:planet_id', (req, res) => {
  let planetId = req.params.planet_id;
  mySqlConn.query('UPDATE planet SET population WHERE id=?;', [planetId], (error, result) => {
    if(error) {

    }
  });
});

app.post('/toplanet/:planet_id', (req, res) => {
  let planetId = req.params.id;

});

app.listen(PORT, () => {
  console.log(`The app is runing on port ${PORT}`);
});
