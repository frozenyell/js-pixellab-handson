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

console.warn(
  ` Folosind un for, afiseaza numarul total de ani pe care il au persoanele
  din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani
  intr-o propozitie de felul: "Suma varstelor persoanelor peste yy de ani
   este: ssss.".`,
);
var totalAge = 0;
var ageLimit = 30;
for (i = 0; i < person.friends.length; i++) {
  var age = person.friends[i].age;

  if (age >= ageLimit) {
    totalAge += age;
  }
}
console.log(
  `Suma varstelor persoanelor peste ${ageLimit} de ani este: ${totalAge}.`,
);

console.warn(`Folosind un for, afiseaza suma anilor de nastere a
persoanelor intr-o propozitie de felul "Suma anilor de nastere
este: ssss.".
`);

var totalAge = 0;
for (i = 0; i < person.friends.length; i++) {
  var friendAge = person.friends[i].age;
  var ageDiff = 2023 - friendAge;
  totalAge = totalAge + ageDiff;
}
console.log(`Suma anilor de nastere este: ${totalAge}.`);

console.warn(
  ` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul
  friends, doar daca aceasta este mai mare de 2 ani intr-o
   propozitie de forma "Diferenta de varsta mai mare de xxx ani este yyy.". `,
);
var diff = 2;
for (i = 0; i < person.friends.length; i++) {
  var ageDiff = person.age - person.friends[i].age;
  console.log(
    `Intre ${person.name} si ${person.friends[i].name} este o diferenta de ${ageDiff} ani`,
  );
  if (ageDiff > 2) {
    console.log(
      `Diferenta de varsta mai mare de ${diff} ani este ${ageDiff}. `,
    );
  }
}

console.warn(`Afiseaza fraza: "Intre Dragos si Larry este o diferenta de
 xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este
  impara.
`);

var message = '';
for (i = 0; i < person.friends.length; i++) {
  var ageDiff = person.age - person.friends[i].age;

  if (person.friends[i].age % 2 !== 0) {
    message +=
      'Intre ' +
      person.name +
      ' si ' +
      person.friends[i].name +
      ' este o diferenta de ' +
      ageDiff +
      ' ani.';
  }
}
console.log(message);

console.warn(`Folosind proprietatea length a arrayului skills si o bucla
for, afiseaza in ordine inversa elementele arrayului skills. Atentie,
 va trebui sa numeri invers, de la length la 0.
`);
person.skills.reverse();
for (i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];
  console.log(skill);
}
