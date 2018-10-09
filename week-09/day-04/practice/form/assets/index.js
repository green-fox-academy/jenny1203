const URL = 'http://localhost:3000';
window.onload = () => {

  const tbody = document.querySelector('#tbody');
  fetch(`${URL}/datas`)
    .then((resp) => resp.json())
    .then(response => {

      for (let index = 0; index < response.length; index++) {
        let tableRow = document.createElement('tr');
        let editButons = document.createElement('button');
        editButons.innerText = 'Edit';
        editButons.classList.add('editButton');

        editButons.addEventListener('click', () => {
          event.preventDefault();
          let name = document.querySelector("#name");
          let password = document.querySelector('#password');
          name.value = response[index].name;
          password.value = response[index].password;
        });

        console.log(response[index]);
        let keys = Object.keys(response[index]);

        for (let objIndex = 0; objIndex < keys.length; objIndex++) {
          let key = keys[objIndex];
          let tableColumn = document.createElement('td');
          let tableColumnText = document.createTextNode(response[index][key]);
          tableColumn.appendChild(tableColumnText);
          tableRow.appendChild(tableColumn);
          tableRow.appendChild(editButons);
        };
        tbody.appendChild(tableRow);
      };
    });

  // form send button, hogy küldje el a mysql tábában
  const data = { name: name.value, password: password.value }
  fetch(`${URL}/add`, {
    method: 'post',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data)
  }).then((res) => res.json())
    .then(res => {
      console.log('succes:', JSON.stringify(res));
    });
};
