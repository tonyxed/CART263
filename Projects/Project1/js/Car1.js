//red car
class Car1 {
  constructor(x, y, vy, size) {
    this.x = x;
    this.y = y;
    this.vy = vy;
    this.w = 180;
    this.h = 150;
    this.size = size;
  }
  //simulation of all functions in one function
  simulation(){
    this.display();
    this.movement();
    this.offScreen();
    this.constrain();
    }

  //display's the car1
  display() {
    push();
    imageMode(CENTER);
    image(cars[0], this.x, this.y, this.w, this.h);
    pop();
  }
  //moves the car1
  movement() {
    this.y = this.y + this.vy;
  }

  //if car goes offScreen, place it back
  offScreen() {
    let y = 0;
    let x = random(120, 150);
    if (this.y > height) {
      this.x = x;
      this.y = 0;
      this.vy += .3;
    }
  }
  //constrains the speed
  constrain(){
    this.vy = constrain(this.vy, 5, 9);
  }
}
