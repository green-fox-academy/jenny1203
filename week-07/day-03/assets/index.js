let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
const http400 = 'http://localhost:4000/api/book';
httpRequest.open('GET', http400, true);
httpRequest.onload = () => {
  console.log(httpRequest.status);
    let books = JSON.parse(httpRequest.responseText);
    console.log(books);
    let BookTable =  document.getElementById('BookTitle');
    books.forEach(element => {
     BookTable.innerHTML = <tr><td>element</td></tr>;
    });
};
httpRequest.send();
