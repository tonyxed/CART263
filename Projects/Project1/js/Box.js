class Box {
  constructor() {
    this.x = 0;
    this.y = 920;
    this.color = 0;
    this.w = 1000;
    this.h = 70;
  }

  //displays the box
  display() {
    push();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
