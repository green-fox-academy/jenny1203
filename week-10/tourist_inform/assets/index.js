const URL = 'http://localhost:3000';
window.onload = () => {


  const tbody = document.querySelector('#tbody');
  //constra ird át 
  let attrName = document.querySelector('#attrName');
  let city = document.querySelector('#city');
  let price = document.querySelector('#price');
  let longitude = document.querySelector('#longitude');
  let latitude = document.querySelector('#latitude');
  let category = document.querySelector('#category');
  let duration = document.querySelector('#duration');
  let recomendedAge = document.querySelector('#recomendedAge');

  function drawTable() {
    tbody.innerHTML = '';
    fetch(`${URL}/attractions`)
      .then((resp) => resp.json())
      .then(response => {
        console.log(response);


        //draw table with loop
        for (let index = 0; index < response.length; index++) {
          let tableRow = document.createElement('tr');
          let editButtons = document.createElement('button');
          let deleteButtons = document.createElement('button');
          editButtons.innerText = 'Edit';
          deleteButtons.innerText = 'Delete';
          editButtons.classList.add('editButton');
          deleteButtons.classList.add('deleteButton');

          editButtons.addEventListener('click', (event) => {
            event.preventDefault();

            attrName.value = response[index].attr_name;
            city.value = response[index].city;
            price.value = response[index].price;
            longitude.value = response[index].longitude;
            latitude.value = response[index].latitude;
            category.value = response[index].category;
            duration.value = response[index].duration;
            recomendedAge.value = response[index].recommended_age;
          });

          deleteButtons.addEventListener('click', (event) => {
            event.preventDefault();
            let deleteId = response[index].id;
            fetch(`/delete/${deleteId}`, { method: 'DELETE' })
              .then(res => res.json())
              .then(res => {
                console.log('Deleted', res);
                drawTable();
              });
          });

          let keys = Object.keys(response[index]);
          for (let objIndex = 1; objIndex < keys.length; objIndex++) {
            let key = keys[objIndex];
            let tableColumn = document.createElement('td');
            let tableColumnText = document.createTextNode(response[index][key]);
            tableColumn.appendChild(tableColumnText);
            tableRow.appendChild(tableColumn);
            tableRow.appendChild(editButtons);
            tableRow.appendChild(deleteButtons);
          };
          tbody.appendChild(tableRow);
        };
      });
  }

  drawTable();


  //refresh with button
  let refreshButton = document.querySelector('#refreshButton');
  refreshButton.addEventListener('click', () => {
    location.reload();
  });

  //submit with event listener
  let button = document.querySelector("#submit");
  button.addEventListener('click', () => {
    const values = {
      attr_name: attrName.value,
      city: city.value, price: price.value, longitude: longitude.value,
      latitude: latitude.value, category: category.value, duration: duration.value,
      recommended_age: recomendedAge.value
    };
    fetch(`${URL}/add`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(values)
    }).then((res) => res.json())
      .then(res => {
        console.log(JSON.stringify(res));

        drawTable();
        
        /*let tableRow = document.createElement('tr');
        let tableButton = document.createElement('button');
        let tableButtonText = document.createTextNode('Edit');
        tableButton.appendChild(tableButtonText);

        Object.keys(values).forEach(key => {
          let tableColumn = document.createElement('td');
          let tableColumnText = document.createTextNode(values[key]);
          tableRow.appendChild(tableColumn);
          tableColumn.appendChild(tableColumnText);
        });
        tbody.appendChild(tableRow);
        tableRow.appendChild(tableButton);*/
      });
  });
};
