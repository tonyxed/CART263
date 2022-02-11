class Lines {
  constructor() {
    this.x = 300;
    this.y = 100;
    this.w = 10;
    this.h = 150;
    this.vy = 4;
    this.x1 = 300;
    this.y1 = 450;
    this.w1 = 10;
    this.h1 = 150;
    this.vy1 = 4;
    this.x2 = 300;
    this.y2 = 750;
    this.w2 = 10;
    this.h2 = 150;
    this.vy2 = 4;
    this.x3 = 300;
    this.y3 = -750;
    this.w3 = 10;
    this.h3 = 150;
    this.vy3 = 4;
    this.x4 = 300;
    this.y4 = 50;
    this.w4 = 10;
    this.h4 = 150;
    this.vy4 = 4;
    this.color = "#edea18";
  }

  //displays the road lines
  display() {
    push();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    pop();
    push();
    fill(this.color);
    rect(this.x1, this.y1, this.w1, this.h1);
    pop();
    push();
    fill(this.color);
    rect(this.x2, this.y2, this.w2, this.h2);
    pop();
  }

  //movement of the lines of the road
  movement() {
    this.y += this.vy;
    this.y1 += this.vy1;
    this.y2 += this.vy2;
    this.y3 += this.vy3;
    this.y4 += this.vy4;
  }

  //once offScreen come back into canvas
  offScreen() {
    if (this.y > height) {
      this.y = 5;
    } else if (this.y1 > height) {
      this.y1 = 5;
    } else if (this.y2 > height) {
      this.y2 = 5;
    } else if (this.y3 > height) {
      this.y3 = 5;
    } else if (this.y4 > height) {
      this.y4 = 5;
    }
  }
}
