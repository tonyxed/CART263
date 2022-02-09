class Road {
  constructor() {
    this.x = 205;
    this.y = 75;
    this.w = 500;
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
