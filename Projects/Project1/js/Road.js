class Road {
  constructor() {
    this.x = 80;
    this.y = 10;
    this.w = 440;
    this.h = 1000;
    this.color = "#63756d";
  }
  //displays the road
  display() {
    push();
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
