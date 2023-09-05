var object = {
  name: 'Diriglont',
  surname: 'Ionica',
  age: 23,
  petOwner: false,
};

console.warn(`Cerinta 1`);

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' ' +
    'si am' +
    ' ' +
    object.age +
    ' ' +
    'ani.',
);

console.warn('Cerinta 2');
console.log((2023 - object.age).toString());

console.warn('Cerinta 3');
