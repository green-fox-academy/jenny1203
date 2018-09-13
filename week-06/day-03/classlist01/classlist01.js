let ps = document.querySelectorAll('p');

if( ps[3].classList.contains('dolphin')){
  ps[0].textContent = 'pear';
} else if(ps[0].classList.contains('apple')){
  ps[2].textContent = 'dog';
}

ps[0].classList.add('red');
ps[1].style.borderRadius = '30%';