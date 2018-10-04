'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');
const mysql = require('mysql');
const assets = express.static('assets');

const PORT = 5555;
const app = express();

app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(assets);

const mysqlConn = mysql.createConnection({
  database: 'quiz',
  user: 'root',
  host: 'localhost',
  password: 'panda',
  multipleStatements: true
});

mysqlConn.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('Connection established :) ');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "assets/quiz.html"));
});

app.get('/game', (req, res) => {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  mysqlConn.query(`SELECT * FROM answers WHERE question_id = ${randomNumber}`, (error, answers) => {
    if (error) {
      console.log(error);
      res.status(400).json({ message: 'Sq went wrong' });
      return;
    } else {
      mysqlConn.query(`SELECT * FROM questions WHERE id = ${randomNumber}`, (error, questions) => {
        if (error) {
          console.log(error);
          res.status(400).json({ message: 'Sq went wrong with questions' })
          return;
        } else {
          res.status(200).json({ questions, answers });
        };
      });

    }
  });
});

app.get('/questions', (req, res) => {
  mysqlConn.query(`SELECT * FROM questions`, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({ message: 'Sq went wrong' });
      return;
    } else {
      console.log(result)
      res.status(200).json({ result });
    }
  });
});

app.delete('/questions/:id', (req, res) => {
  let questionId = req.params.id;
  mysqlConn.query(`delete from questions where id = ?`, [questionId], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(400).send('Database error');
      return;
    }
    mysqlConn.query(`delete from answers where question_id = ?`, [questionId], (err, result) => {
      if(err) {
        console.log(err.message);
        res.status(400).send('Database error');
        return;
      }
      res.json({ 'message': 'ok' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`The app is runing on port ${PORT}`);
});
