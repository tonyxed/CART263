class Animal {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.angle = 0;
    this.image = image;
    this.float = .5;
  }
  update() {
    this.display();
  }
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop();
  }
  move(){
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }
  floating(){
    let r = random();
    if (r < this.float){
      this.vx = random(-.5, .5);
      this.vy = random(-.5, .5);
    }
  }
  overlap(x, y) {
    if (x > this.x - this.image.width / 2 && x < this.x + this.image.width / 2 &&
      y > this.y - this.image.height / 2 && y < this.y + this.image.height / 2) {
      return true;
    } else {
      return false;
    }
  }
}
