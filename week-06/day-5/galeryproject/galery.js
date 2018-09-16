let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let images = document.querySelectorAll('.img');
let paragraph = document.querySelector('p');
let buttons = document.querySelectorAll('.move');

next.onclick = nextClick;
prev.onclick = prevClick;

function nextClick() {
  for (let index = 0; index <= images.length - 1; index++) {
    if (images[index].className === 'visible') {
      images[index].className = 'hidden';
      if (index === images.length - 1) {
        images[0].className = 'visible';
      } else {
        images[index + 1].className = 'visible';
      }
      break;
    }
  }
}

function prevClick() {
  for (let index = images.length - 1; index >= 0; index--) {
    if (images[index].className === 'visible') {
      images[index].className = 'hidden';
      if(index === 0) {
        images[images.length -1].className = 'visible';
      } else {
        images[index - 1].className = 'visible';
      }
      break;
    }
  }
}
