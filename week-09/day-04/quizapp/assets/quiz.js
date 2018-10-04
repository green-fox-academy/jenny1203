const url = 'http://localhost:5555';

window.onload = () => {


  fetch(`${url}/game`, {
    method: 'get'
  }).then(resp => (resp.json()))
    .then(response => {
      let questionHolder = document.querySelector('#container');
      let questionsParagraph = '';
      let answersParagraph = '';

      response.questions.forEach(element => {
        questionsParagraph += '<p>' + element.question + '</p>';
      });

      response.answers.forEach(element => {
        answersParagraph += '<button>' + element.answer + '</button>' + '<br>';
      });
      questionHolder.innerHTML = questionsParagraph + answersParagraph;
    });
}