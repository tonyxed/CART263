/**
The Need for the Speed!
Anthony Calderone

A really dubbed down version of the film; Need For Speed!
Race your way through the busy Georgian Highway. Avoid everything at all costs.
*/
//change lives
//change timer to something else

"use strict";

//pictures
let userPic;
let crashPic;
let titlePic;
let winPic;
let bikePic;

//sounds
let carCrash;
let traffic;
let driving;
let titleMusic;
let winMusic;

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

//bike
let bike;

//score
let score = 0;

//lives
let lives = 3;

//game pause
let running = true;

//timer
let timer = 50;

//canvas properties
const WIDTH = 600;
const HEIGHT = 1000;

function preload() {

  //images
  userPic = loadImage("assets/images/user.png");
  cars[0] = loadImage("assets/images/car.png");
  cars[1] = loadImage("assets/images/car2.png");
  cars[2] = loadImage("assets/images/car3.png");
  crashPic = loadImage("assets/images/crash.png");
  titlePic = loadImage("assets/images/title.png");
  winPic = loadImage("assets/images/win.png");
  bikePic = loadImage("assets/images/bike.png");

  //sounds
  carCrash = loadSound("assets/sounds/crash.mp3");
  traffic = loadSound("assets/sounds/traffic.mp3");
  driving = loadSound("assets/sounds/driving.mp3");
  titleMusic = loadSound("assets/sounds/title.wav");
  winMusic = loadSound("assets/sounds/win.mp3");
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  titleMusic.setVolume(.005);
  titleMusic.play();

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
  let x = random(120, 170);
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

  //bike class
  let x3 = random(200, 240);
  let y3 = -500;
  let vy3 = 5;
  let size3 = 50;
  bike = new Bike(x3, y3, vy3, size3);
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
      livesText();
      timerCountdown();
    } else if (state === "lose") {
      livesDone();
    } else if (state === 'end') {
      endScreen();
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

  //bikeSimulation
  bike.display();
  bike.movement();
  bike.offScreen();

  //userSimulation
  user.display();
  user.simulation();
  user.constrain();
  user.collision1();
  user.collision2();
  user.collision3();
  user.collision4();

  //boxSimulation
  box.display();

  //once timer hits 0, user able to move
  if (frameCount % 60 === 0 && timer > 0) {
    timer--;
  }
  if (timer === 0) {
    state = 'end';
    winMusic.setVolume(0.1);
    winMusic.play();
    titleMusic.stop();
    traffic.stop();
    driving.stop();
  }
}

//livesText
function livesText() {
  push();
  textSize(30);
  fill(255);
  text(lives, 330, 940, 70, 70);
  pop();
  push();
  textSize(30);
  fill(255);
  text("Lives:", 230, 940, 70, 70);
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
  background("black");
  imageMode(CENTER);
  image(crashPic, width / 2, height / 2, 400, 500)
  push();
  textSize(30);
  fill(255);
  textAlign(CENTER);
  text("You're done for!", width / 2, 800);
  pop();
  traffic.stop();
  driving.stop();
}

//unpauses the game + responsiveVoice
function keyPressed() {
  if (!running) {
    running = true;
    state = 'game';
    traffic.play();
    traffic.setVolume(.008);
    traffic.loop();
    driving.play();
    driving.setVolume(.010);
    driving.loop();
    //space key
    if (keyCode === 32) {
      responsiveVoice.speak("AGAIN!", "UK English Male", {
        volume: 1
      });
    }
  }
  if (state === 'title') {
    //Y key
    if (keyCode === 89) {
      responsiveVoice.speak("Embark on a ride that makes no sense. This is a dumbed down version of the film need for speed, my own take!.", "UK English Male", {
        volume: 1
      });
    } //U key
    else if (keyCode === 85) {
      responsiveVoice.speak("Avoid the oncoming traffic. Beat the timer to win!", "UK English Male", {
        volume: 1
      });
    } //P key
    else if (keyCode === 80) {
      responsiveVoice.speak("To your demise!", "UK English Male", {
        volume: 1
      });
    }
  }
}
//reset the cars when hit
function reset() {
  //car1 reset
  car1.x = random(120, 190);
  car1.y = random(0, 70);
  car1.vy = 5;
  car1.size = 50;
  //car2 reset
  car2.x1 = random(390, 490);
  car2.y1 = random(-300, -100);
  car2.vy1 = 5;
  car2.size1 = 50;
  //car3 reset
  car3.x2 = random(250, 340);
  car3.y2 = random(-100, 0);
  car3.vy2 = 5;
  car3.size2 = 50;
  timer = 30;
  //bike reset
  bike.x3 = random(200, 240);
  bike.y3 = -400;
  bike.vy3 = 5;
  bike.size3 = 50;
}

//title
function titleMenu() {
  push();
  imageMode(CENTER);
  image(titlePic, width / 2, height / 2, 800, 900);
  fill(150 + cos(frameCount * 0.1) * 128);
  textSize(20);
  textStyle(ITALIC);
  textAlign(CENTER);
  text("Play: 'P'", width / 2, 800);
  pop();
  push();
  fill(150 + cos(frameCount * 0.1) * 128);
  textSize(19);
  textStyle(ITALIC);
  textAlign(CENTER);
  text("GOAL: 'U'", width / 2, 900);
  pop();
  push();
  fill(150 + sin(frameCount * 0.1) * 128);
  textSize(19);
  textStyle(ITALIC);
  textAlign(CENTER);
  text("BACKSTORY: 'Y'", width / 2, 850);
  pop();
  //P key
  if (keyCode === 80) {
    state = 'game';
    traffic.play();
    traffic.setVolume(.008);
    traffic.loop();
    driving.play();
    driving.setVolume(.010);
    driving.loop();
  }
}

//timerCountdown
function timerCountdown() {
  push();
  fill(0);
  textSize(40);
  textAlign(CENTER);
  text(timer, width / 2, 400);
  pop();

  //when timer hits 0, flash text
  if (timer === 0) {
    fill(255 + cos(frameCount * 0.1) * 128);
    textSize(40);
    textAlign(CENTER);
    text(timer, width / 2, 400);
  }
}
//endScreen
function endScreen() {
  push();
  background(0);
  imageMode(CENTER);
  image(winPic, width / 2, height / 2, 800, 800);
  pop();
}
