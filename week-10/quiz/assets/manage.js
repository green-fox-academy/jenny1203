const URL = 'http://localhost:8080';

window.onload = () => {

  const container = document.querySelector('#container');
  const question = document.querySelector('#question');
  const answerOne = document.querySelector('#answerOne');
  const answerTwo = document.querySelector('#answerTwo');
  const answerThree = document.querySelector('#answerThree');
  const answerFour = document.querySelector('#answerFour');
  const answerChecks = document.querySelectorAll('.answerCheck');

  let answerCheck = '';

  renderQuestions();

  function renderQuestions() {
    fetch(`${URL}/api/questions`)
      .then((resp) => resp.json())
      .then(response => {
        console.log(response);

        container.innerHTML = '';
        for (let index = 0; index < response.length; index++) {
          let questionHolder = document.createElement('p');
          questionHolder.innerText = response[index].question;
          let deleteButton = document.createElement('button');
          deleteButton.innerText = 'Delete';
          container.appendChild(questionHolder);
          container.appendChild(deleteButton);

          deleteButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('belement a deletebe');
            let deleteId = response[index].id;
            fetch(`${URL}/questions/${deleteId}`, {
              method: 'delete'
            }).then(res => res.json())
              .then(res => {
                console.log('Deletet:' + res);
                renderQuestions();
              });
          });
        };

        const submitButton = document.querySelector('#submit');
        submitButton.addEventListener('click', () => {
          postQuestion(response);
        });
      });
  };

  function answerChecked(answerChecks) {
    for (let index = 0; index < answerChecks.length; index++) {
      if (answerChecks[index].checked) {
        answerCheck = answerChecks[index].value;
      };
    };
  };

  function postQuestion(response) {
    container.innerHTML = '';
    answerChecked(answerChecks);

    const values = {
      question: question.value,
      answerOne: answerOne.value,
      answerTwo: answerTwo.value,
      answerThree: answerThree.value,
      answerFour: answerFour.value,
      answerCheck: answerCheck
    };

    fetch(`${URL}/questions`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(values)
    }).then((res) => res.json())
      .then(res => {
        console.log(res);
        renderQuestions(response);
      });
  };

};
