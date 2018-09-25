const button = document.querySelector('button');
const p = document.querySelector('p');

button.addEventListener('click', (event) => {
  setTimeout( addp, 2000)
});

function addp() {
  p.innerHTML = '2 seconds ellapsed';
}