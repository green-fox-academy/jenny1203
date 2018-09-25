const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  event = Date.now();
  console.log(event);
});
