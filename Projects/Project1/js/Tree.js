class Tree {
  constructor(x, y, vy) {
    this.x = x;
    this.y = y;
    this.vy = vy;
  }
  //displays the tree
  display() {
    push();
    image(treePic, this.x, this.y, 150, 150);
    pop();
  }
  //moves the tree
  movement() {
    this.y = this.y + this.vy;
    this.y1 = this.y1 + this.vy1;
  }
  //check if tree is offscreen
  offScreen() {
    if (this.y > height) {
      this.y = 0
      this.x = random(-40, -20);
    }
  }
  }
