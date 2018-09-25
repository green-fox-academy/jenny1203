const lastPressedKey = document.querySelector('h1')

document.addEventListener('keyup', (event) => {
  console.log(event);
  lastPressedKey.innerHTML = `Last pressed key code is: ${event.keyCode}`;
});
