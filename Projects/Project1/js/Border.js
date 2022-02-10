class Border {
  constructor(){
    this.x = 80;
    this.y = 10;
    this.h = 910;
    this.w = 5;
    this.color = "#0f0e0b";
    this.x1 = 530;
    this.y1 = 10;
    this.h1 = 910;
    this.w1 = 5;
  }
  //displays the borders of the road
  display(){
    //left border of road
    push();
    stroke(0);
    strokeWeight(1);
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    pop();
    //right border of road
    push();
    stroke(0);
    strokeWeight(1);
    fill(this.color);
    rect(this.x1, this.y1, this.w1, this.h1);
    pop();
  }
}
