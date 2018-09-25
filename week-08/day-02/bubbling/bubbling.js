let image = document.querySelector('div')
const bubbling = document.querySelector('.bubbling');
bubbling.addEventListener('click', (event) => {
  if (event.target.dataset.direction === 'up') {
    image.style.bottom = '10px';
    console.log('sy happend');
  } else if (event.target.dataset.direction === 'down') {
    image.style.top = '10px';
    console.log('other tihing happened');
  } else if (event.target.dataset.direction === 'left') {
    image.style.right = '10px';
    console.log(image.style.left);
  } else if (event.target.dataset.direction === 'right') {
    image.style.left = '10px';
  } else if (event.target.dataset.direction === 'in') {
    //the zoom buttons increase/decrease the image by 20%
    image.style.width = '1000px';
    image.style.height = '640px';
  } else if (event.target.dataset.direction === 'out') {
    image.style.width = '250px';
    image.style.height = '160px';
  }
});
