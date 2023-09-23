console.warn(`Folosind metoda prompt(), implementeaza
schema logica folosid else if si afiseaza in pagina
(folosind exemplul de la Ex 01) mesajul:
“Numarul introdus este mai mic decat | mai mare decat| egal cu 20.”
`);

var userInput = prompt('Introdu un numar');
var number = Number(userInput);
var errorMessage = 'Nu s-a introdus un numar';
var paragraphElement = document.getElementById('message');
var paragraphElement2 = document.getElementById('message2');

if (userInput === null || userInput.trim() === '' || isNaN(number)) {
  console.log(errorMessage);
} else if (number < 20) {
  var message = `Numarul ${number} este mai mic decat 20`;
  console.log(message);
  paragraphElement.innerText = message;
} else if (number > 20) {
  var message = `Numarul ${number} este mai mare decat 20`;
  console.log(message);
  paragraphElement.innerText = message;
} else {
  var message = 'Numarul ' + number + ' este egal cu 20.';
  console.log(message);
  paragraphElement2.innerText = message;
}
