const button = document.querySelector('button');
const p = document.querySelector('p');
let clicks = 0;

button.addEventListener('click', (event) => {
  clicks++;
  if(clicks === 3) {
    setTimeout( addp, 5000);
    clicks = 0;
  } else if( clicks < 3) {
    console.log('plez click 3 times no more')
  }
  
});

function addp() {
  p.innerHTML = '5 seconds elapsed and clicked 3 times';
}