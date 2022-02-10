class Player {
  constructor() {
    this.x = 420;
    this.y = 850;
    this.size = 40;
    this.vx = 4;
    this.vy = 4;
    this.speedBoost = 0;
  }
  //displays the player
  display() {
    push();
    noStroke();
    imageMode(CENTER);
    image(userPic, this.x, this.y, 180, 150);
    pop();
  }
  //simulation of the player
  simulation() {
    // doing else if for each if statement doesn't go well with the game and it's movement
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
  //checks collision between player and car2
  collision() {
    let d = dist(this.x, this.y, car2.x1, car2.y1);
    if (d < this.size / 2 + car2.size1 / 2) {
      console.log("car2 Collision!");
      lives -= 1; //play voice
    }
  }
}
