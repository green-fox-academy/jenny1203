'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mysql = require('mysql');
const path = require('path');
const assets = express.static('assets');

const PORT = 3040;
const app = express();

app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(assets);

const mySqlConn = mysql.createConnection({
  host: 'localhost',
  password: 'panda',
  user: 'root',
  database: 'reddit',
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

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/posts', (req, res) => {
  mySqlConn.query('SELECT * FROM posts;', (error, result) => {
    if (error) {
      res.status(500).send();
    } else {
      console.log(result);
      res.status(200).json(result);
    };
  });
});

app.post('/posts', (req, res) => {
  let title = req.body.title;
  let url = req.body.url;

  if (title && url) {
    mySqlConn.query('INSERT INTO posts(title, url) VALUES (?, ?);', [title, url], (error, result) => {
      if (error) {
        res.status(500).send();
      } else {
        console.log(result);
        let id = result.insertId;
        mySqlConn.query('SELECT * FROM posts WHERE id=?', [id], (error, result) => {
          if (error) {
            res.send(500).send();
          } else {
            res.status(200).send(result);
          };
        });
      };
    });
  };
});


app.put('/posts/:id/upvote', (req, res) => {
  let id = req.params.id;
  if (id) {
    mySqlConn.query('SELECT * FROM posts WHERE id=?;', [id], (error, result) => {
      if (error) {
        console.log(error);
        res.send(500).send();
      } else {
        console.log(result);
        result[0].Score++;
        let score = result[0].Score;
        mySqlConn.query('UPDATE posts SET score=? WHERE id=?;', [score, id], (err, UpdateResult) => {
          if (err) {
            console.log(err);
            res.status(500).send();
          } else {
            console.log(UpdateResult);
            res.status(200).send(result);
          };
        });
      };
    });
  };
});


app.put('/posts/:id/downvote', (req, res) => {
  let id = req.params.id;
  if (id) {
    mySqlConn.query('SELECT * FROM posts WHERE id=?;', [id], (error, result) => {
      if (error) {
        console.log(error);
        res.send(500).send();
      } else {
        console.log(result);
        if (result[0].Score <= 0) {
          result[0].Score = 0;
          res.status(200).send(result);
        } else {
          result[0].Score--;
          let score = result[0].Score;
          mySqlConn.query('UPDATE posts SET score=? WHERE id=?;', [score, id], (err, UpdateResult) => {
            if (err) {
              console.log(err);
              res.status(500).send();
            } else {
              console.log(UpdateResult);
              res.status(200).send(result);
            };
          });
        };
      };
    });
  };
});

app.delete('/posts/:id', (req, res) => {
  let id = req.params.id;
  if (id) {
    mySqlConn.query('SELECT * FROM posts WHERE id=?;', [id], (error, result) => {
      if (result.length === 0) {
        console.log(error);
        res.status(400).send();
      } else {
        mySqlConn.query('DELETE FROM posts WHERE id=?;', [id], (errorDelete, resultDelete) => {
          if (errorDelete) {
            console.log(errorDelete);
            res.status(500).send();
          } else {
            res.status(200).json(result);
          };
        });
      }
    });
  }
});

app.post('/posts/:id', (req, res) => {
  let id = req.params.id;
  let url = req.body.Url;
  let title = req.body.Title;
  if(id){
    mySqlConn.query('SELECT * FROM posts WHERE Id=?;', [id], (err, result) => {
      if(result.length === 0) {
        res.status(400).send();
      } else {
        console.log(result);
        mySqlConn.query('UPDATE posts SET Title=?, Url=? WHERE Id=?;', [title, url, id], (error, resulrUpdate) => {
          if(error) {
            console.log(error);
            res.status(500).send();
          } else {
            console.log(resulrUpdate);
            mySqlConn.query('SELECT * FROM posts WHERE Id=?;', [id], (error, upresult) => {
              if(error){
                res.status(500).send();
              }else{
                res.status(200).json(upresult);
              }
            });

          };
        });
      };
    });
  }
});

app.listen(PORT, () => {
  console.log(`The app is runing on port ${PORT}`);
});
