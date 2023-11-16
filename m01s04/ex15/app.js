const person = {
  name: 'Iulian',
  surname: 'Cuculici',
  friends: [
    { name: 'Larry', surname: 'Larryson', age: 50 },
    { name: 'Steven', surname: 'Stevenson', age: 21 },
    { name: 'Carol', surname: 'Carolson', age: 30 },
    { name: 'Andra', surname: 'Andrason', age: 32 },
  ],
};

//Intre x si y este o diferenta de abc ani
const length = person.friends;
for (let i = 0; i < length; i++) {
  const outerFriend = person.friends[i];

  for (let j = 0; j < length; j++) {
    if (i == j) {
      continue;
    }

    const innerFriend = person.friends[j];
    const ageDifference = Math.abs(outerFriend.age - innerFriend.age);
    const message = `Intre ${outerFriend.name} si ${innerFriend.name} este o diferenta de ${ageDifference} ani.`;

    console.log(message);
  }
}
