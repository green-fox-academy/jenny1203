let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
const http400 = 'localhost:4000';
httpRequest.open('GET', http400, true);
httpRequest.onload = () => {
  if(httpRequest.status === 200) {
    console.log(httpRequest.response);
  }
};
httpRequest.send(null);

