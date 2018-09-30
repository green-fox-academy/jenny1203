const express = require('express');

const app = express();

const PORT = 8080;

const path = require('path');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => { //url: localhost:3010/doubling?input=valami
  res.setHeader('Content-Type', 'application/json'); //json tipus megadása
  if (req.query.input !== undefined) {
    let objectInput = {
      "received": parseFloat(req.query.input), //lebegőpontos számmá konvertáljuk a megkapott paramétert
      "result": parseFloat(req.query.input) * 2
    }
    res.send(JSON.stringify(objectInput)); //json formátumban küldi tovább

  } else {
    let emptyObj = {
      "error": "Please provide an input!"
    }
    res.send(JSON.stringify(emptyObj));
  }

});

app.get('/greeter', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.query.name && req.query.title !== undefined) {
    let name = {
      "welcome_message": "Oh, hi there " + req.query.name + ", my dear " + req.query.title + "!"
    }
    res.send(JSON.stringify(name));
  } else if(req.query.name === undefined) {
    let noName = {
      "error": "Please provide a name!"
    }
    res.send(JSON.stringify(noName));
  } else if(req.query.title === undefined) {
    let noTitle = {
      "error": "Please provide a title!"
    }
    res.send(JSON.stringify(noTitle));
  }

});

app.get('/appenda/:appendable', (req, res) => {
  let tryOut = {
    'appended': req.params.appendable + 'a'
  }
  res.send(JSON.stringify(tryOut));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
