const click = document.querySelector('.click');
const p = document.querySelector('p');
const li = document.querySelectorAll('li');

click.addEventListener ('click', (event) => {
  //console.log(event);
  event = li.length;
  p.innerHTML = `You have ${event} in your list.`;
});

