//syntatic sugar
//js nu are clase
class Car {
  //Notatia 1 - js nou
  topSpeed = 160;
  topReverseSpeed = -50;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    //metoda
    this.speed++;
  }

  decelerate() {
    //metoda
    this.speed--;
  }

  stop() {
    this.speed = 0;
    console.log(`Viteza noua este: ${this.speed}`);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
  }
}

const audi = new Car('Audi', 'black', 4, 50); // instanta noua a clasei car cu proprietatile accelerate si deccelerate
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];
//sa vedem bucla pe tema
