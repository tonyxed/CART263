class Credits {
  constructor(){
    //first text
    this.x = 300;
    this.y = 600;
    //second text
    this.x1 = 300;
    this.y1 = 800;
    //third text
    this.x2 = 300;
    this.y2 = 1000;
    //first text
    this.vy = 1;
    //second text
    this.vy1 = 1;
    //third text
    this.vy2 = 1;
  }

  //all functions into one function
  simulation(){
    this.display();
    this.movement();
  }

  //displays the credits
  display(){
    push();
    textSize(25);
    textAlign(CENTER);
    textStyle(ITALIC);
    fill(255);
    text("YOU'VE BEATEN 'THE NEED FOR THE SPEED!'", this.x, this.y);
    text("IN ASSOCIATION WITH:", this.x1, this.y1);
    text("https://www.pikpng.com\n https://freesound.org\n https://p5js.org/reference\n https://www.canva.com", this.x2, this.y2);
    pop();
  }

  //movement of the credits
  movement(){
    this.y -= this.vy;
    this.y1 -= this.vy1;
    this.y2 -= this.vy2;
  }
}
