class Player {
  constructor() {
    this.x = 305;
    this.y = 850;
    this.size = 50;
    this.vx = 4;
    this.vy = 4;
    this.w = 180;
    this.h = 150;
    this.speedBoost = 0;
  }

  //displays the player
  display() {
    push();
    noStroke();
    imageMode(CENTER);
    image(userPic, this.x, this.y, this.w, this.h);
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

  //checks collision between player and car1
  collision1() {
    let d = dist(this.x, this.y, car1.x, car1.y);
    if (d < this.size / 2 + car1.size / 2) {
      this.x = 305;
      this.y = 850;
      running = false;
      lives -= 1;
    }
    if (lives === 0) {
      state = 'lose'
    }
  }

  //checks collision between player and car2
  collision2() {
    let d = dist(this.x, this.y, car2.x1, car2.y1);
    if (d < this.size / 2 + car2.size1 / 2) {
      this.x = 305;
      this.y = 850;
      running = false;
      lives -= 1;
    }
    if (lives === 0) {
      state = 'lose'
    }
  }

  //checks collision between player and car3
  collision3() {
    let d = dist(this.x, this.y, car3.x2, car3.y2);
    if (d < this.size / 2 + car3.size2 / 2) {
      this.x = 305;
      this.y = 850;
      running = false;
      lives -= 1;
    }
    if (lives === 0) {
      state = 'lose'
    }
  }
}
