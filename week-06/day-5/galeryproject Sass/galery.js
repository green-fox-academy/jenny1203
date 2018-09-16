let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let images = document.querySelectorAll('.img');
let paragraph = document.querySelector('p');
let smallImgs = document.querySelectorAll('.move');

next.onclick = nextClick;
prev.onclick = prevClick;

function nextClick() {
  for (let index = 0; index <= images.length - 1; index++) {
    if (images[index].className === 'img visible') {
      images[index].className = 'img hidden';
      if (index === images.length - 1) {
        images[0].className = 'img visible';
      } else {
        images[index + 1].className = 'img visible';
      }
      break;
    }
  }
}

function prevClick() {
  for (let index = images.length - 1; index >= 0; index--) {
    if (images[index].className === 'img visible') {
      images[index].className = 'img hidden';
      if(index === 0) {
        images[images.length -1].className = 'img visible';
      } else {
        images[index - 1].className = 'img visible';
      }
      break;
    }
  }
}

for(let index = 0; index < smallImgs.length; index++) {
  let src = smallImgs[index].getAttribute('src');
  smallImgs[index].onclick = smallImgsClick();
}

function smallImgsClick() {
  for (let index = 0; index <= images.length - 1; index++) {
    if(images[index].getAttribute('src') === src) {
      images[index].className = 'img visible';
      alert('src');
    } else {
      images[index].className = 'img hidden';
    }
  }
}