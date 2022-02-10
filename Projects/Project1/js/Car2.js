class Car2 {
  constructor(x1, y1, vy1, size1) {
    this.x1 = x1;
    this.y1 = y1;
    this.vy1 = vy1;
    this.size1 = size1;
  }
  //display's the car
  display() {
    push();
    imageMode(CENTER);
    image(carPic2, this.x1, this.y1, 80, 130);
    pop();
  } //moves the car
  movement() {
    this.y1 = this.y1 + this.vy1;
  }
  //if car goes offScreen, place it back
  offScreen() {
    let x = random(120, 270);
    let y = random(-90, 70);
    if (this.y1 > height) {
      this.x1 = x;
      this.y1 = y;
    }
  }
}
