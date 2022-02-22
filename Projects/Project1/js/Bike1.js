//bike1
class Bike1 {
  constructor(x4, y4, vy4, size4) {
    this.x4 = x4;
    this.y4 = y4;
    this.vy4 = vy4;
    this.w4 = 100;
    this.h4 = 100;
    this.size4 = size4;
  }

  //simulation of all functions in one function
  simulation(){
  this.display();
  this.movement();
  this.offScreen();
  this.constrain();
  }

  //display's the bike1
  display() {
    push();
    imageMode(CENTER);
    image(bike1Pic, this.x4, this.y4, this.w4, this.h4);
    pop();
  }
  //moves the bike1
  movement() {
    this.y4 = this.y4 + this.vy4;
  }

  //if bike goes offScreen, place it back
  offScreen() {
    let y = 200;
    let x = random(360, 390);
    if (this.y4 > height) {
      this.x4 = x;
      this.y4 = 0;
      this.vy4 += .3;
    }
  }
  //constrains the speed
  constrain(){
    this.vy4 = constrain(this.vy4, 5, 9);
  }
}
