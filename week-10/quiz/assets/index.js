const URL = 'http://localhost:8080';
let score = 0;
let text = 'Score ';

window.onload = () => {
  addQuestions();
};

addQuestions = () => {
  const container = document.querySelector('#container');


  container.innerHTML = '';

  fetch(`${URL}/game`)
    .then((resp) => resp.json())
    .then(response => {
      console.log(response);

      let scoreHolder = document.createElement('h2');


      scoreHolder.innerHTML = text + score;
      container.appendChild(scoreHolder);

      let question = document.createElement('p');
      question.innerText = response.question;
      container.appendChild(question);

      let answers = response.answers;

      for (let index = 0; index < answers.length; index++) {
        let answerButton = document.createElement('button');
        answerButton.innerHTML = answers[index].answer;
        container.appendChild(answerButton);

        answerButton.addEventListener('click', (event) => {
          event.preventDefault();
          if (answers[index].is_correct === 0) {
            answerButton.style.backgroundColor = 'red';

            setTimeout(() => {
              addQuestions();
            }, 2000);
          } else {
            answerButton.style.backgroundColor = 'green';
            score++;
            scoreHolder.innerHTML = text + score;
            setTimeout(() => {
              addQuestions();
            }, 2000);
          };
        });
      };
    });
};
