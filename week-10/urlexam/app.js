const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mysql = require('mysql');
const path = require('path');
const assets = express.static('assets');

const PORT = 3050;
const app = express();

app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(assets);

const mySqlConn = mysql.createConnection({
  host: 'localhost',
  password: 'panda',
  user: 'root',
  database: 'url_aliasing_application',
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

app.post('/api/links', (req, res) => {
  let url = req.body.url;
  let alias = req.body.alias;
  if (url && alias) {
    console.log('hogy vane megnezte');
    mySqlConn.query(`SELECT * FROM urlAliasingAppData WHERE alias=?`, [alias], (aliaserr, aliasres) => {
      console.log(aliasres);
      if (aliasres.length === 0) {
        let secretCode = Math.floor(Math.random() * (9999 - 999 + 1) + 999);
        console.log('az alias selectbe belement')
        mySqlConn.query(`INSERT INTO urlAliasingAppData(url, alias, secretCode) VALUES (?, ?, ?)`, [url, alias, secretCode], (errInsert, resInsert) => {
          if (errInsert) {
            console.log(errInsert);
            res.send(500).send();
            return;
          } else {
            let id = resInsert.insertId;
            mySqlConn.query(`SELECT * FROM urlAliasingAppData WHERE id=?`, [id], (idErr, idRes) => {
              if(idErr) {
                console.log(idErr);
                res.status(500).send();
                return;
              } else {
                res.json(idRes);
              };
            });
          };
        });
      } else {
        console.log(aliasres)
        res.status(400).send();
        return;
      };
    });
  };
});



app.listen(PORT, () => {
  console.log(`The app is runing on port ${PORT}`);
});
