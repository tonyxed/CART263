class Road {
  constructor(){
    this.x = 155;
    this.y = 75;
    this.w = 595;
    this.h = 1000;
    this.color = "#63756d";
  }
  //displays the road
  display(){
    fill(this.color);
    noStroke();
    rect(this.x,this.y,this.w,this.h);
  }
}
