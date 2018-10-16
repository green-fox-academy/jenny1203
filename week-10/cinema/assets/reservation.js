const url = 'http://localhost:3010';

window.onload = () => {

  let location = window.location.href;
  let urlArr = location.split('/');
;
  let idInUrl = urlArr[urlArr.length-1];

  const name = document.querySelector('#name');
  const phone = document.querySelector('#phone');
  const movie = document.querySelector('#movie');
  const totalPrice = document.querySelector('#totalPrice');

  fetch(`${url}/api/reservations/${idInUrl}`)
  .then((resp) => resp.json())
  .then(response => {
    console.log(response[0]);

    name.innerText = response[0].name;
    phone.innerText = response[0].phone;
    movie.innerText = response[0].selectedMovie;
    totalPrice.innerText = 'Total price:' + response[0].ticketPrice;
  });


};
