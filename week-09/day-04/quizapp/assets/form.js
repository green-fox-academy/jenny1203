const url = 'http://localhost:5555';

window.onload = () => {
  fetch(`${url}/questions`, {
    method: 'get'
  }).then(resp => (resp.json()))
    .then(response => {
      let questionsTable = document.querySelector('#questionsTable');
      response.result.forEach(element => {
        let tableRow = document.createElement('tr');
        let tableColumn = document.createElement('td');
        let text = document.createTextNode(element.question);
        tableColumn.appendChild(text);
        let button = document.createElement('button');
        button.innerText = 'Delete';
        button.addEventListener('click', () => {
          deleteQuestion(element.id);
        });
        tableColumn.appendChild(button);
        tableRow.appendChild(tableColumn);
        questionsTable.appendChild(tableRow);
      });
    });

  deleteQuestion = (questionId) => {
    fetch(url + '/questions/' + questionId, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }

    }).then(resp => (resp.json()))
      .then((response) => {
        if (response.message === 'ok') {
          location.reload();
        }
      });
  }
}