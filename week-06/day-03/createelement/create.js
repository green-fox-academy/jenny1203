let asteroid = document.querySelector('ul');

let newElement = document.createElement('li');
newElement.textContent = 'The Green Fox';
asteroid.appendChild(newElement);

let newElement2 = document.createElement('li');
newElement2.textContent = 'The Lamplighter';
asteroid.appendChild(newElement2);

let newElement3 = document.createElement('h2');
newElement3.textContent = 'I can add elements to the DOM!';

let myDiv = document.querySelector('.container');
myDiv.appendChild(newElement3);

let myImage = document.createElement('img');
myImage.setAttribute('src', 'https://previews.123rf.com/images/red33/red330906/red33090600009/4958673-cute-turtle-vector-illustration.jpg');
myDiv.appendChild(myImage);