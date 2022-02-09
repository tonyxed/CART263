class Lines {
  constructor() {
    this.x = 450;
    this.y = 150;
    this.w = 10;
    this.h = 150;
    this.vy = 3;
    this.x1 = 450;
    this.y1 = 450;
    this.w1 = 10;
    this.h1 = 150;
    this.vy1 = 3;
    this.x2 = 450;
    this.y2 = 750;
    this.w2 = 10;
    this.h2 = 150;
    this.vy2 = 3;
    this.x3 = 450;
    this.y3 = -850;
    this.w3 = 10;
    this.h3 = 150;
    this.vy2 = 3;
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
  movement(){
    this.y += this.vy;
    this.y1 += this.vy1;
    this.y2 += this.vy2;
    this.y3 += this.vy3;
  }
  //once offScreen come back into canvas
  offScreen(){
    if(this.y > height){
      this.y = 50;
    } else if (this.y1 > height){
      this.y1 = 50;
    } else if (this.y2 > height){
      this.y2 = 50;
    } else if (this.y3 > height){
      this.y3 = 50;
    }
  }
}
