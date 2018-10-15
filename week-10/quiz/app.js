'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mysql = require('mysql');
const path = require('path');
const assets = express.static('assets');

const PORT = 8080;
const app = express();

app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(assets);

const mySqlConn = mysql.createConnection({
  host: 'localhost',
  password: 'panda',
  user: 'root',
  database: 'quiz',
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

app.get('/game', (req, res) => {
  let randomId = Math.floor(Math.random() * 10) + 1;
  mySqlConn.query('SELECT * FROM questions INNER JOIN answers ON questions.id=answers.question_id WHERE questions.id=?;', [randomId], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send();
    } else {
      res.status(200).json({
        "id": randomId,
        "question": result[0].question,
        "answers": [
          {
            "question_id": randomId,
            "id": result[0].id,
            "answer_1": result[0].answer,
            "is_correct": result[0].is_correct
          },
          {
            "question_id": randomId,
            "id": result[1].id,
            "answer_1": result[1].answer,
            "is_correct": result[1].is_correct
          },
          {
            "question_id": randomId,
            "id": result[2].id,
            "answer_1": result[2].answer,
            "is_correct": result[2].is_correct
          },
          {
            "question_id": randomId,
            "id": result[3].id,
            "answer_1": result[3].answer,
            "is_correct": result[3].is_correct
          }
        ]
      });
    };
  });
});

app.get('/questions', (req, res) => {
  mySqlConn.query('SELECT * FROM questions;', (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send();
    } else {
      console.log(result);
      res.status(200).json(result);
    };
  });
});

app.post('/questions', (req, res) => {
  let question = req.body.question;
  let answerOne = req.body.answerOne;
  let answerTwo = req.body.answerTwo;
  let answerThree = req.body.answerThree;
  let answerFour = req.body.answerFour;
  let isCorrect = req.body.isCorrect;
  if (question && answerOne && answerTwo && answerThree && answerFour) {
    mySqlConn.query('INSERT INTO questions(question) VALUES(?);', [question], (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).send();
      } else {
        console.log(result);

        let questionId= result.insertId;
        console.log(questionId);
        
        mySqlConn.query('INSERT INTO answers(question_id, answer,is_correct) VALUES(?,?,?),(?,?,?),(?,?,?),(?,?,?);', [questionId, answerOne, isCorrect, questionId, answerTwo,isCorrect, questionId, answerThree, isCorrect, questionId, answerFour,isCorrect], (Inserterror, Insertresult) => {
          if(Inserterror) {
            console.log(Inserterror);
            res.status(500).send;
          } else {
            console.log(Insertresult);
            res.status(200).send();
          };
        });
      };
    });
  } 
});

app.delete('/questions/:id', (req, res) => {
  let deletableId = req.params.id;
  if(deletableId) {
    mySqlConn.query(`DELETE FROM questions WHERE id=?;`, [deletableId], (error, result) => {
      if(error) {
        console.log(error);
        res.status(500).send();
      } else {
        mySqlConn.query(`DELETE FROM answers WHERE question_id=?;`, [deletableId], (error, result) => {
          if(error) {
            console.log(error);
            res.send(500).send();
          } else {
            console.log(result);
            res.send(200).send();
          };
        });
      };
    });
  };
});

app.listen(PORT, () => {
  console.log(`The app is runing on port ${PORT}`);
});
