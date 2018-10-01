const express = require('express');
const app = express();
const PORT = 3040;
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));

app.post('/arrays', jsonParser, (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let what = req.body.what;
  let numbers = req.body.numbers;
  if (what === 'sum') {
    let counter = 0;
    for (let index = 0; index < numbers.length; index++) {
      counter += numbers[index];
    }
    let result = {
      "result": counter
    }
    res.send(JSON.stringify(result));
  } else if (what === "multiply") {
    let counter = 1;
    for (let index = 0; index < numbers.length; index++) {
      counter = counter * numbers[index];
    }
    let result = {
      "result": counter
    }
    res.send(JSON.stringify(result));
  } else if (what === "double") {
    let numbers = [];
    for(let index = 0; index < numbers.length; index++) {
      numbers = numbers.push(numbers[index] * numbers[index]);
    }
    let result = {
      result: numbers
    }
    res.send(JSON.stringify(result));
  } else {
    let noRes = {
      "error": "Please provide what to do with the numbers!"
    }
    res.send(JSON.stringify(noRes));
  }
});

app.get('/', (req, res) => {
  res.send('OK!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
