class Car3 {
  constructor(x2, y2, vy2, size2) {
    this.x2 = x2;
    this.y2 = y2;
    this.vy2 = vy2;
    this.w2 = 80;
    this.h2 = 130;
    this.size2 = size2;
  }

  //display's the car
  display() {
    push();
    imageMode(CENTER);
    image(carPic3, this.x2, this.y2, this.w2, this.h2);
    pop();
  }
  //moves the car
  movement() {
    this.y2 = this.y2 + this.vy2;
  }

  //if car2 goes offScreen, place it back
  offScreen() {
    let x = random(120, 240);
    if (this.y2 > height) {
      this.x2 = x;
      this.y2 = 0;
    }
  }
}
