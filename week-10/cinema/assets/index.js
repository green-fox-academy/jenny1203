const url = 'http://localhost:3010';

window.onload = () => {
  console.log('valami')

  const submitButton = document.querySelector('#submit');
  const radioButtonValues = document.querySelectorAll('.answerCheck');
  const glassesCheckBox = document.querySelector('#glasses');
  const name = document.querySelector('#name');
  const phone = document.querySelector('#phone');

  submitButton.addEventListener('click', (event) => {
    console.log('click added')
    let values = {
      name: name.value,
      phone: phone.value,
      selectedMovie: getSelectedMovie(radioButtonValues),
      glasses: glassesCheck(glassesCheckBox),
      ticketPrice: ticketPriceValue(glassesCheckBox)
    };
    console.log(values);
    fetch(`${url}/save`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(values)
    }).then((res) => res.json())
      .then(response => {
        console.log(response);
      });
  });


  function getSelectedMovie(movies) {
    for (let index = 0; index < movies.length; index++) {
      if (movies[index].checked) {
        return movies[index].value;
      };
    } return null;
  };

  function glassesCheck(box) {
    if (box.checked) {
      return "Y";
    } else {
      return "N";
    }
  };

  function ticketPriceValue(box) {
    console.log(box.checked);
    if (box.checked) {
      return 1800;
    } else {
      return 1500;
    };
  };

};