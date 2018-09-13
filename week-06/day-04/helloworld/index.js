const express = require('express');
const app = express();
const PORT = 3003;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Page title',
    header: 'Hello server',
  });
});

app.listen(PORT, () => {
  console.log('jubkjb jk');
})