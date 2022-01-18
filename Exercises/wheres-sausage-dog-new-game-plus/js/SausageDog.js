class SausageDog extends Animal {
  constructor(x, y, image) {
    super(x, y, image);
    this.found = false;
    this.rotationSpeed = 0.25;
    this.float = .5;
    this.vx = 0;
    this.vy = 0;
  }
  update() {
    super.update();
    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }
  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      this.found = true;
      state = "finish";
    }
  }
  move(){
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }
  floating(){
    let r = random();
    if (r < this.float){
      this.vx = random(-2, 2);
      this.vy = random(-2, 2);
    }
  }
}
