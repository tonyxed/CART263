class Player {
  constructor() {
    this.x = 450;
    this.y = 900;
    this.size = 40;
    this.vx = 4;
    this.speedBoost = 0;
  }
  //displays the player
  display() {
    push();
    noStroke();
    imageMode(CENTER);
    image(userPic, this.x, this.y, 50, 100);
    pop();
  }
  //simulation of the player
  simulation() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.vx;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.vx;
    }
  }
  //constrains the player to the road
  constrain() {
    this.x = constrain(this.x, border.x + 27, border.x1 - 25);
  }
}
