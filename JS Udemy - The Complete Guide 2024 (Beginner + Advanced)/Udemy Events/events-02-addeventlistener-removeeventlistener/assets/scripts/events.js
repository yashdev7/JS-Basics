
// First Way :
{/*
const button = document.querySelector('button');

const buttonClickHandler = () => {
  alert('Button was clicked');
}

button.onclick = buttonClickHandler;
*/} 


// Second Way :

const button = document.querySelector('button');

const buttonClickHandler = () => {
  alert('Button was Clicked');
}

button.addEventListener('click', buttonClickHandler);

// for removing listener 
setTimeout(() => {
  button.removeEventListener('click', buttonClickHandler);
}, 2000);
