const URL = 'http://localhost:3060';

window.onload = () => {
  let tbody = document.querySelector('#tbody');

  drawTable();


  
};

function drawTable() {
  tbody.innerHTML = '';
  fetch(`${URL}/tableInfo`)
    .then((resp) => resp.json())
    .then(response => {

      for (let index = 0; index < response.length-1; index++) {
        let tableRow = document.createElement('tr');
        let tdPlanet = document.createElement('td');
        let tdPopulation = document.createElement('td');
        let tdLocation = document.createElement('td');
        let tdOnShip = document.createElement('td');

        let moveButton = document.createElement('button');
        moveButton.innerText = 'Move here';
        console.log(response[index].id);
        console.log(response[index].name);
        moveButton.addEventListener('click', (event) => {
          fetch(`${URL}/movehere/${response[index].id}`, {
            method: 'post', 
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            }
          }).then((res) => res.json())
            .then(res => {
              console.log(res);
              drawTable();
            });
        });

        let tdPlanetText = document.createTextNode(response[index].name);
        let tdPopulationText = document.createTextNode(response[index].population);

        let tdOnShipText = '';

        if (response[index].utilization === null) {
          tdOnShipText = document.createTextNode('-');
          tdLocation.appendChild(moveButton);
        } else {
          tdOnShipText = document.createTextNode(response[index].utilization);
          let toPlanet = document.createElement('button');
          toPlanet.innerText = 'To planet';

          let toShip = document.createElement('button');
          toShip.innerText = 'To Ship';
          tdLocation.appendChild(toPlanet);
          tdLocation.appendChild(toShip);
        }

        tdPlanet.appendChild(tdPlanetText);
        tdPopulation.appendChild(tdPopulationText);

        tdOnShip.appendChild(tdOnShipText);

        tableRow.appendChild(tdPlanet);
        tableRow.appendChild(tdPopulation);
        tableRow.appendChild(tdLocation);
        tableRow.appendChild(tdOnShip);
        tbody.appendChild(tableRow);
      }

    });
}