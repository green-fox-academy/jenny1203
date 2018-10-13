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
  };
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
              if (idErr) {
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
// If the alias exists it should increment the 
//hit count and redirect to
// the URL otherwise respond with 404 status code

//redirect
app.get('/a/:alias', (req, res) => {
  let aliasUrl = req.params.alias;
  if (aliasUrl) {
    mySqlConn.query('SELECT * FROM urlAliasingAppData WHERE alias=?;', [aliasUrl], (errSelect, respSelect) => {
      if (respSelect.length === 0) {
        console.log(errSelect);
        res.status(404).send();
      } else {
        console.log(respSelect[0].hitCount);
        //update kell a msqlben
        let hitCountAdd = respSelect[0].hitCount + 1;
        console.log(hitCountAdd);

        mySqlConn.query('UPDATE urlAliasingAppData SET hitCount=? WHERE alias=?;', [hitCountAdd, aliasUrl], (updateErr, respErr) => {
          if (updateErr) {
            res.status(500).send();
          } else {
            res.status(200).send();
          };
        });
        res.status(200).redirect('/');
      };
    });
  };
});

/* 
UPDATE Customers
SET ContactName='Alfred Schmidt', City='Frankfurt'
WHERE CustomerID=1;
*/

app.get('/api/links', (req, res) => {
  mySqlConn.query(`SELECT id, url, alias, hitCount FROM urlAliasingAppData;`, (selectErr, selectResp) => {
    if (selectErr) {
      console.log(selectErr);
      res.status(500).send();
    } else {
      res.status(200).json(selectResp);
    };
  });
});

app.delete('/api/links/:id', (req, res) => {
  let secretCode = req.body.secretCode;
  let deletableId = req.params.id;
  if (secretCode) {
    mySqlConn.query(`SELECT * FROM urlAliasingAppData WHERE secretCode=?;`, [secretCode], (errDelete, resDelete) => {
      if (resDelete.length === 0) {
        console.log('Nem egyezik')
        console.log(errDelete);
        res.status(403).send();
      } else {
        mySqlConn.query('DELETE FROM urlAliasingAppData WHERE id=?', [deletableId], (errorDelete, resDelete) => {
          if (errorDelete) {
            res.status(500).send();
          } else {
            res.status(204).send();
          };
        });
      };
    });
  } else {
    console.log('No secret');
    res.status(404).send();
  };
});

app.listen(PORT, () => {
  console.log(`The app is runing on port ${PORT}`);
});
