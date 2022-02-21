//bike
class Bike {
  constructor(x3, y3, vy3, size3) {
    this.x3 = x3;
    this.y3 = y3;
    this.vy3 = vy3;
    this.w3 = 100;
    this.h3 = 100;
    this.size3 = size3;
  }

  //simulation of all functions in one function
  simulation(){
    this.display();
    this.movement();
    this.offScreen();
    this.constrain();
  }

  //display's the bike
  display() {
    push();
    imageMode(CENTER);
    image(bikePic, this.x3, this.y3, this.w3, this.h3);
    pop();
  }
  //moves the bike
  movement() {
    this.y3 = this.y3 + this.vy3;
  }

  //if bike goes offScreen, place it back
  offScreen() {
    let y = -500;
    let x = random(220, 240);
    if (this.y3 > height) {
      this.x3 = x;
      this.y3 = 0;
      this.vy3 += .3;
    }
  }
  constrain(){
    this.vy3 = constrain(this.vy3, 5 , 9);
  }
}
