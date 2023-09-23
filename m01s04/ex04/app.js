var limitA = 32;

console.warn(`Cerinta 1`);
for (var i = 1; i <= limitA; i++) {
  console.log('Numar pana la ' + limitA + ' inclusiv: ' + i + '.');
}

console.warn(`Cerinta 2`);
for (var i = 1; i < limitA; i++) {
  console.log('Numar pana la ' + limitA + ' exclusiv: ' + i + '.');
}

var limitB = 15;
console.warn(`Cerinta 3`);
for (var i = 1; i < limitA; i++) {
  console.log('Ma voi opri la ' + limitB + ': ' + i + '.');
  if (i === limitB) {
    console.log('M-am oprit la ' + limitB + '.');
    break;
  }
}

console.warn(`Cerinta 4`);
for (var i = 1; i <= limitA; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(
    'Toate numerele pare intre 1 si ' + limitA + ' inclusiv: ' + i + '.',
  );
}

var denominator = 5;
console.warn(`Cerinta 5`);
for (var i = 1; i <= limitA; i++) {
  if (i % denominator === 0) {
    console.log(
      'Toate numerele divizibile cu ' +
        denominator +
        ' pana la ' +
        limitA +
        ' inclusiv: ' +
        i +
        '.',
    );
  }
}

console.warn(`Modifica exemplul astfel incat bucla sa numere
de la 1 la 20, folosind propozitii de forma
“Numerele pana la 20 inclusiv: i.”.`);
var limitSup = 20;
for (i = 1; i <= 20; i++) {
  console.log('Numerele pana la ' + limitSup + ' inclusiv: ' + i + '.');
}

console.warn(`Modifica exemplul astfel incat bucla sa numere
de la 1 la 19, folosind propozitii de forma
“Numerele pana la 19 exclusiv: i.”.`);
var limitSup = 20;
for (i = 1; i < limitSup; i++) {
  console.log('Numerele pana la ' + limitSup + ' exclusiv: ' + i + '.');
}

console.warn(`Folosind keywordul break opreste bucla atunci cand
numarul este egal cu 8, cu propozitii de forma
“Numerele se vor opri la 8: i.”.`);
var limitSup = 8;
for (i = 0; i <= limitSup; i++) {
  if (i === 8) {
    console.log('Numerele s-au oprit la ' + limitSup + '.');
    break;
  }
  console.log('Numerele se vor opri la ' + limitSup + ': ' + i + '.');
}

console.warn(`Folosind keywordul continue, afiseaza doar numele
impare intre 1 si 20, cu propozitii de forma
“Numerele impare pana la 20 inclusiv: i.”.`);
var limitSup = 20;
for (i = 1; i <= limitSup; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log('Numerele impare pana la ' + limitSup + ' inclusiv: ' + i + '.');
}

console.warn(`In mod similar, afiseaza doar numerele care sunt
divizibile cu 3, cu propozitii de forma
“Numerele divizibile cu 3 pana la 20 inclusiv: i.”.`);
var limitSup = 20;
for (i = 0; i <= 20; i++) {
  if (i % 3 !== 0) {
    continue;
  }
  console.log(
    'Numerele divizibile cu 3 pana la ' + limitSup + ' inclusiv: ' + i + '.',
  );
}
