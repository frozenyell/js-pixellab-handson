var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`Folosind obiectul person si un for,
afiseaza in consola skillurile de pe pozitiile pare ale arrayului,
in propozitii de forma "xxx se afla pe indexul iii al arrayului.".
`);

for (i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (i % 2 === 0) {
    console.log(`${skill} se afla pe indexul ${i} al arrayului.`);
  }
}

console.warn(` In mod similar, afiseaza skillurile care
NU incep cu j, folosind propozitii de forma
"Tehnologia xxx nu incepe cu j!".
`);
for (i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];
  if (skill[0] === 'j') {
    console.log(`Tehnologia ${skill} incepe cu j!`);
  }
  console.log(`Tehnologia ${skill} nu incepe cu j!`);
}

console.warn(` Folosind un for, afiseaza propozitia:
 "Prietenii mei se numesc: xxx yyy, xxx yyy, xxx yyy."`);
var message = 'Prietenii mei se numesc: ';
var punctuation = ', ';
for (i = 0; i < person.friends.length; i++) {
  var pName = person.friends[i].name;
  var pSurname = person.friends[i].surname;

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  message = message + pName + ' ' + pSurname + punctuation;
}
console.log(message);
