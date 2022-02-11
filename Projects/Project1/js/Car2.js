class Car2 {
  constructor(x1, y1, vy1, size1) {
    this.x1 = x1;
    this.y1 = y1;
    this.vy1 = vy1;
    this.w1 = 80;
    this.h1 = 130;
    this.size1 = size1;
  }

  //display's the car
  display() {
    push();
    imageMode(CENTER);
    image(carPic2, this.x1, this.y1, this.w1, this.h1);
    pop();
  }
  //moves the car
  movement() {
    this.y1 = this.y1 + this.vy1;
  }

  //if car2 goes offScreen, place it back
  offScreen() {
    let x = random(120, 240);
    if (this.y1 > height) {
      this.x1 = x;
      this.y1 = 0;
    }
  }
}
