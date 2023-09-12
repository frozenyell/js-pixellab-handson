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
