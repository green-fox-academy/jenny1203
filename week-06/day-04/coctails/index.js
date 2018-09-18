const express = require('express');
const app = express();
const port = 3006;

app.set('view engine', 'ejs');

const cocktails = [
  { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
  { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
  { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
  { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
  { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
  { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
  { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
  { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];

const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

app.get('/', (req, res)=> {
  res.render('home', {
    alcoholList: alcoholList,
    cocktails: cocktails,
  });
});

app.get('/id', (req, res) => {
  for(let index = 0; index < cocktails.length; index++) {
    cocktail =  reg.querry.cocktails[index];
  }
  res.render('home', {
    coctail: cocktail,
    id: id,
   });
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});