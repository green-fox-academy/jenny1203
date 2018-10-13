let URL = 'http://localhost:3050/';

window.onload = () => {
  let submitButton = document.querySelector('#submitButton');
  let url = document.querySelector('#url');
  let alias = document.querySelector('#alias');

  submitButton.addEventListener('click', (event) => {
    const values = {
      url: url.value,
      alias: alias.value
    };

    fetch(`${URL}api/links`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(values)
    }).then((res) => res.json())
      .then(res => {
      console.log(JSON.stringify(res[0]));
      let title = document.querySelector('#title');
      title.innerText = 'Succes'
      let paragraph = document.querySelector('#resultParagraph');
      paragraph.innerText = `Your URL is alies to ${res[0].alias} and your secret code is ${res[0].secretCode}`;
      url.value = '';
      alias.value = '';
    })
    .catch(error => {
      console.log(error);
      let title = document.querySelector('#title');
      title.innerText = 'Error'
      let paragraph = document.querySelector('#resultParagraph');
      paragraph.style.color = 'red';
      paragraph.innerText = `Your alias is already in use`;
    });
  });
};