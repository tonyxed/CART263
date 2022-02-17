class Lines {
  constructor() {
    this.x = 220;
    this.y = 100;
    this.w = 10;
    this.h = 150;
    this.vy = 4;
    this.x1 = 220;
    this.y1 = 450;
    this.w1 = 10;
    this.h1 = 150;
    this.vy1 = 4;
    this.x2 = 220;
    this.y2 = 750;
    this.w2 = 10;
    this.h2 = 150;
    this.vy2 = 4;
    this.x3 = 360;
    this.y3 = 100;
    this.w3 = 10;
    this.h3 = 150;
    this.vy3 = 4;
    this.x4 = 360;
    this.y4 = 450;
    this.w4 = 10;
    this.h4 = 150;
    this.vy4 = 4;
    this.x5 = 360;
    this.y5 = 750;
    this.w5 = 10;
    this.h5 = 150;
    this.vy5 = 4;
    this.color = "#edea18";
  }
  //simulation of all functions in one function
  simulation(){
    this.display();
    this.movement();
    this.offScreen();
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
    push();
    fill(this.color);
    rect(this.x3, this.y3, this.w3, this.h3);
    pop();
    push();
    fill(this.color);
    rect(this.x4, this.y4, this.w4, this.h4);
    pop();push();
    fill(this.color);
    rect(this.x5, this.y5, this.w5, this.h5);
    pop();
  }

  //movement of the lines of the road
  movement() {
    this.y += this.vy;
    this.y1 += this.vy1;
    this.y2 += this.vy2;
    this.y3 += this.vy3;
    this.y4 += this.vy4;
    this.y5 += this.vy5;
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
    } else if (this.y5 > height) {
      this.y5 = 5;
    }
  }
}
