const Car = {
  //obiect literal - fiind prototip pentru alte clase, il scriem cu litera mare
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 160,
  topReverseSpeed: -50,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    this.speed++;

    this.displaySpeed();
  },

  decelerate: function () {
    this.speed--;

    this.displaySpeed();
  },
};

const audi = Object.create(Car); //Instanta a obiectului Car.
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 220;

console.log(audi);
