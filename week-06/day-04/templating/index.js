'use strict'

const express = require('express'); //servert létrehozza
const app = express(); //express dolgait használjuk
const PORT = 3001; //melyik kapun akarsz bejonni :D

app.set('view engine', 'ejs'); //express viselkedését módosítjuk, view engin : ejs (kulcs)

app.get('/', (req, res) => { // request milyen szerver várja a válaszokat respond 
  // perjel a homepage
  res.render('home', {
    title: 'Home page',
    header: 'Green Fox Academy',
  });
});

app.get('/products/:id', (req, res) => { //változót kap
  res.render('home', { //változót irja bele a htmlbe
    title: 'Product page', 
    header: req.params.id, // irjon bele valamit muszaj és mit irtál bele?
    withGoodbye: req.query.withgoodbye === 'true', //megnézed hogy mit irt be a felhasználó
  });
});

app.listen(PORT, () => { //ez kell hogy a porton figyelje a kérdéseket
  console.log(`The server is up and running on port ${PORT}`);
});