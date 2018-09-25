const button = document.querySelector('button');
let buttonOn = false;
button.addEventListener('click', (event) => {
  if(!buttonOn) {
    event = new Date();
    console.log(event);
    buttonOn = true;
  } else {
    button.removeEventListener('click', event);
  }
});
