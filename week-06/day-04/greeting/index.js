const express = require('express');
const app = express();
const PORT = 3004;

app.set('view engine', 'ejs');

app.get('/', ((req, res) => {
  let greeting = 'Guest';
  if(req.query.kiskutya !== undefined){
    greeting = req.query.kiskutya;
  }
  res.render('home', {
    eztadomat: greeting,
  })

}));

app.listen(PORT, () => {
  console.log(`Server running port: ${PORT}`);
})