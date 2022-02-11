/**
The Need for the Speed!
Anthony Calderone

A really dubbed down version of the film; Need For Speed!
Race your way through the busy highway 401 in Ontario, Canada. Avoid everything at all costs.
*/
//needs to be implemented:

//Introduction of back story
//Sound effects using (ResponsiveVoice)
//pick ups (lowers speed if bad one?)

"use strict";

//pictures
let userPic;
let treePic;
let truckPic;

//sounds
let carCrash;
let traffic;
let driving;

//cars
let cars = [];

//player
let user;

//border
let border;

//box
let box;

//road
let road;

//lines of the road
let lines;

//car1
let car1;

//car2
let car2;

//car3
let car3;

//tree
let objects = {
  trees: [],
  numTrees: 10,
};

//score
let score = 0;

//lives
let lives = 3;

//game pause
let running = true;


//canvas properties
const WIDTH = 600;
const HEIGHT = 1000;

function preload() {

  //images
  userPic = loadImage("assets/images/user.png");
  treePic = loadImage("assets/images/tree.png");
  cars[0] = loadImage("assets/images/car.png");
  cars[1] = loadImage("assets/images/car2.png");
  cars[2] = loadImage("assets/images/car3.png");
  truckPic = loadImage("assets/images/truck.png");

  //sounds
  carCrash = loadSound("assets/sounds/crash.mp3");
  traffic = loadSound("assets/sounds/traffic.mp3");
  driving = loadSound("assets/sounds/driving.mp3");
}

function setup() {
  createCanvas(WIDTH, HEIGHT);

  //player class
  user = new Player();

  //Border class
  border = new Border();

  //Box class
  box = new Box();

  //Road class
  road = new Road();

  //line class
  lines = new Lines();

  //car1 class
  let x = random(120, 190);
  let y = random(25, 70);
  let vy = 5;
  let size = 50;
  car1 = new Car1(x, y, vy, size);

  //car2 class
  let x1 = random(390, 490);
  let y1 = -300;
  let vy1 = 5;
  let size1 = 50;
  car2 = new Car2(x1, y1, vy1, size1);

  //car3 class
  let x2 = random(250, 340);
  let y2 = -100;
  let vy2 = 5;
  let size2 = 50;
  car3 = new Car3(x2, y2, vy2, size2);

  //tree class
  for (let i = 0; i < objects.numTrees; i++) {
    let x = random(0, -10);
    let y = random(0, 900);
    let vy = 5;
    let tree = new Tree(x, y, vy)
    objects.trees.push(tree);
  }
}

let state = 'title' //starting state

//states
function draw() {
  //if game is running, then display corresponding states
  if (running) {
    if (state === "title") {
      titleMenu();
    } else if (state === "game") {
      background("#0ceb6c");
      gameSimulation();
      scoreText();
      livesText();
    } else if (state === "lose") {
      livesDone();
    }
  }

  //if game isn't running
  if (!running) {
    livesMenu();
    reset();
  }
}

//gameSimulation
function gameSimulation() {
  //roadSimulation
  road.display();

  //linesSimulation
  lines.display();
  lines.movement();
  lines.offScreen();

  //borderSimulation
  border.display();

  //car1Simulation
  car1.display();
  car1.movement();
  car1.offScreen();

  //car2Simulation
  car2.display();
  car2.movement();
  car2.offScreen();

  //car3Simulation
  car3.display();
  car3.movement();
  car3.offScreen();

  //userSimulation
  user.display();
  user.simulation();
  user.constrain();
  user.collision1();
  user.collision2();
  user.collision3();

  //boxSimulation
  box.display();

  //treeSimulation
  // for (let i = 0; i < objects.trees.length; i++) {
  //   objects.trees[i].display();
  //   objects.trees[i].movement();
  //   objects.trees[i].offScreen();
  // }
}

//scoreText
function scoreText() {
  push();
  fill(255);
  textSize(30);
  textAlign(BOTTOM, BOTTOM);
  text(score, 200, 970);
  pop();
  push();
  fill(255);
  textSize(30);
  textAlign(BOTTOM, BOTTOM);
  text("Score:", 100, 970);
  pop();
}

//livesText
function livesText() {
  push();
  textSize(30);
  fill(255);
  text(lives, 380, 940, 70, 70);
  pop();
}

//livesMenu
function livesMenu() {
  push();
  textSize(30);
  fill(255);
  textAlign(CENTER);
  text("Lives:", 300, height / 2);
  pop();
  push();
  textSize(30);
  textAlign(CENTER);
  fill(255);
  text(lives, 350, height / 2);
  pop();
  push();
  textSize(30);
  textAlign(CENTER);
  fill(255);
  text("Hit Space to continue!", 300, 600);
  pop();
  //stops the traffic noise
  traffic.stop();
  driving.stop();
}

//no more lives
function livesDone() {
  background("#0b783c");
  push();
  textSize(30);
  fill(255);
  textAlign(CENTER);
  text("No More Lives!", width / 2, height / 2);
  pop();
  traffic.stop();
  driving.stop();
}

//unpauses the game
function keyPressed() {
  if (!running) {
    if (keyCode === 32) {
      running = true;
      state = 'game';
      traffic.play();
      traffic.setVolume(.008);
      traffic.loop();
      driving.play();
      driving.setVolume(.010);
      driving.loop();
    }
  }
}

//reset the cars when hit
function reset() {
  //car1 reset
  car1.x = random(120, 190);
  car1.y = random(0, 70);
  car1.vy = 8;
  car1.size = 50;
  //car2 reset
  car2.x1 = random(390, 490);
  car2.y1 = random(-300, -100);
  car2.vy1 = 8;
  car2.size1 = 50;
  //car3 reset
  car3.x2 = random(250, 340);
  car3.y2 = random(-100, 0);
  car3.vy2 = 8;
  car3.size2 = 50;
}

//TEST TITLE
function titleMenu(){
  if(keyCode === 32){
    state = 'game';
    traffic.play();
    traffic.setVolume(.008);
    traffic.loop();
    driving.play();
    driving.setVolume(.010);
    driving.loop();
  }
}
