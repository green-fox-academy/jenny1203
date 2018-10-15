const URL = 'http://localhost:8080';

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
    


    let question = document.createElement('p');
    question.innerText = response.question;
    container.appendChild(question);

    let answers = response.answers;

    for(let index = 0; index < answers.length-1; index++) {
      let answerButton = document.createElement('button');
      answerButton.innerHTML = answers[index].answer;
      container.appendChild(answerButton);

      answerButton.addEventListener('click', (event)=> {
        event.preventDefault();
        answerButton.style.backgroundColor = 'red';
        addQuestions();
      });
    }
  });
};
