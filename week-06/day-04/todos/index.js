const express = require('express');
const app = express();
const PORT = 3005;

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');

app.get('/', (req, res => {
  for(let index = 0; index < todos.length; index++){
    
  }
}));

app.listen(PORT, () => {
  console.log(`Server running port: ${PORT}`)
})