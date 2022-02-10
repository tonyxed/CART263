class Car1 {
  constructor(x, y, vy) {
    this.x = x;
    this.y = y;
    this.vy = vy;
  }
  //display's the car
  display() {
    push();
    imageMode(CENTER);
    image(carPic1, this.x, this.y, 180, 150);
    pop();
  } //moves the car
  movement() {
    this.y = this.y + this.vy;
  }
  //if car goes offScreen, place it back
  offScreen() {
    let x = random(120, 270);
    let y = random(-90, 70);
    if (this.y > height) {
      this.x = x;
      this.y = y;
    }
  }
}
