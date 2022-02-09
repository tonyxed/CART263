class Player {
  constructor(x, y, size, speed, vx) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.vx = vx;
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
      this.x -= this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
  }
  //constrains the player to the road
  constrain(){
    this.x = constrain(this.x, border.x + 25, border.x1 - 25);
  }
}
