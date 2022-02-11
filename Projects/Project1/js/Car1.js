class Car1 {
  constructor(x, y, vy, size) {
    this.x = x;
    this.y = y;
    this.vy = vy;
    this.w = 180;
    this.h = 150;
    this.size = size;
  }
  //display's the car
  display() {
    push();
    imageMode(CENTER);
    image(carPic1, this.x, this.y, this.w, this.h);
    pop();
  } //moves the car
  movement() {
    this.y = this.y + this.vy;
  }
  //if car goes offScreen, place it back
  offScreen() {
    let x = random(120, 240);
    if (this.y > height) {
      this.x = x;
      this.y = 0;
    }
  }
}
