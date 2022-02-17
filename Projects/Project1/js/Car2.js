//grey car
class Car2 {
  constructor(x1, y1, vy1, size1) {
    this.x1 = x1;
    this.y1 = y1;
    this.vy1 = vy1;
    this.w1 = 80;
    this.h1 = 130;
    this.size1 = size1;
  }
  
  //simulation of all functions in one function
  simulation(){
    this.display();
    this.movement();
    this.offScreen();
  }

  //display's the car2
  display() {
    push();
    imageMode(CENTER);
    image(cars[1], this.x1, this.y1, this.w1, this.h1);
    pop();
  }
  //moves the car2
  movement() {
    this.y1 = this.y1 + this.vy1;
  }

  //if car2 goes offScreen, place it back
  offScreen() {
    let x = random(410, 470);
    if (this.y1 > height) {
      this.x1 = x;
      this.y1 = -300;
      this.vy1 += .3;
    }
  }
}
