/**

The Need for the Speed!
Anthony Calderone

A really dubbed down version of the film; Need For Speed!
Race your way through the busy Georgian Highway. Avoid all vehicles.

*/


"use strict";

//pictures
let userPic;
let crashPic;
let titlePic;
let winPic;
let bikePic;
let bike1Pic;
let speedBoostPic;

//sounds
let carCrash;
let traffic;
let driving;
let titleMusic;
let winMusic;
let boost;

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

//bike1
let bike1;

//lives
let lives = 3;

//game pause
let running = true;

//timer
let timer = 110;

//credits
let credits;

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
  bike1Pic = loadImage("assets/images/bike1.png");
  speedBoostPic = loadImage("assets/images/speedBoost.png");

  //sounds
  carCrash = loadSound("assets/sounds/crash.mp3");
  traffic = loadSound("assets/sounds/traffic.mp3");
  driving = loadSound("assets/sounds/driving.mp3");
  titleMusic = loadSound("assets/sounds/title.wav");
  winMusic = loadSound("assets/sounds/win.mp3");
  boost = loadSound("assets/sounds/boost.mp3");
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  //music
  titleMusic.setVolume(.005);
  titleMusic.play();

  //player class
  user = new Player();

  //Border class
  border = new Border();

  //Road class
  road = new Road();

  //line class
  lines = new Lines();

  //car1 class
  let x = random(120, 150);
  let y = 0
  let vy = 5;
  let size = 50;
  car1 = new Car1(x, y, vy, size);

  //car2 class
  let x1 = random(410, 470);
  let y1 = -300;
  let vy1 = 5;
  let size1 = 50;
  car2 = new Car2(x1, y1, vy1, size1);

  //car3 class
  let x2 = random(270, 320);
  let y2 = -100;
  let vy2 = 5;
  let size2 = 50;
  car3 = new Car3(x2, y2, vy2, size2);

  //bike class
  let x3 = random(220, 240);
  let y3 = -500;
  let vy3 = 5;
  let size3 = 50;
  bike = new Bike(x3, y3, vy3, size3);

  //bike1 class
  let x4 = random(360, 390);
  let y4 = 200;
  let vy4 = 5;
  let size4 = 50;
  bike1 = new Bike1(x4, y4, vy4, size4);

  //credits class
  credits = new Credits();
}

let state = 'title' //starting state

function draw() {

  //if game is running, then display corresponding states
  if (running) {
    if (state === "title") {
      titleMenu();
    } else if (state === "game") {
      background("#0ceb6c");
      canvasSimulation();
      gameSimulation();
      livesText();
    } else if (state === "lose") {
      livesDone();
    } else if (state === 'end') {
      background(0);
      credits.simulation();
    }
  }

  //if game isn't running
  else if (!running) {
    livesMenu();
    reset();
  }
}

//gameSimulation
function vehiclesSimulation() {
  //car1Simulation
  car1.simulation();

  //car2Simulation
  car2.simulation();

  //car3Simulation
  car3.simulation();

  //bikeSimulation
  bike.simulation();

  //bike1Simulation
  bike1.simulation();
}

//gameSimulation
function gameSimulation() {

  //timerCountdown
  if (frameCount % 60 === 0 && timer > 0) {
    timer--;
  }

  //onces timer hits 86, simulate the game
  if (timer < 86) {
    vehiclesSimulation();
    traffic.setVolume(.008);
  }

  //onces timer hits 86 do following
  if (timer === 86) {
    responsiveVoice.speak("Avoid all traffic for starters.", "UK English Male", {
      volume: 1
    });
  }

  //once timer hits 82, do following
  if (timer === 82) {
    responsiveVoice.speak("I'm impressed!.", "UK English Male", {
      volume: 1
    });
  }
  //once timer hits 75, do following
  if (timer === 75) {
    responsiveVoice.speak("Don't get too cocky!.", "UK English Male", {
      volume: 1
    });
  }

  //once timer hits 68, do following
  if (timer === 68) {
    responsiveVoice.speak("Is my talking distracting you?.", "UK English Male", {
      volume: 1
    });
  }

  //once timer hits 63, do following
  if (timer === 63) {
    responsiveVoice.speak("You're a natural!.", "UK English Male", {
      volume: 1
    });
  }

  //once timer hits 58, do following
  if (timer === 58) {
    responsiveVoice.speak("Don't let your ego get to you, or this will end quick!.", "UK English Male", {
      volume: 1
    });
  }

  //once timer hits 52, do following
  if (timer === 52) {
    responsiveVoice.speak("It would be a shame if I were to do something to make you crash.", "UK English Male", {
      volume: 1
    });
  }

  //once timer hits 40, do following
  if (timer === 40) {
    responsiveVoice.speak("Keep going, I can see the exit coming up!", "UK English Male", {
      volume: 1
    });
  }

  //once timer hits 15, do following
  if (timer === 15) {
    responsiveVoice.speak("You're actually going to make it, i'm impressed.", "UK English Male", {
      volume: 1
    });
  }

  //once timer hits 0, do following
  if (timer === 0) {
    state = 'end';
    winMusic.setVolume(0.1);
    winMusic.play();
    titleMusic.stop();
    traffic.stop();
    driving.stop();
  }
}

//canvasSimulation
function canvasSimulation() {
  //roadSimulation
  road.display();

  //linesSimulation
  lines.simulation();

  //borderSimulation
  border.display();

  //userSimulation
  user.simulation();
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
  fill(0);
  textAlign(CENTER);
  text("Lives:", 300, height / 2);
  pop();
  push();
  textSize(30);
  textAlign(CENTER);
  fill(0);
  text(lives, 350, height / 2);
  pop();
  push();
  textSize(30);
  textAlign(CENTER);
  fill(0);
  text("Hit space to continue!", 300, 600);
  pop();

  //stops the traffic noise
  traffic.stop();
  driving.stop();
  responsiveVoice.cancel();
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
  titleMusic.stop();
  boost.stop();
  responsiveVoice.cancel();
}

//unpauses the game + responsiveVoice
function keyPressed() {
  if (!running) {

    //space key
    if (keyCode === 32) {
      running = true;
      state = 'game';
      traffic.play();
      traffic.setVolume(.008);
      traffic.loop();
      driving.play();
      driving.setVolume(.010);
      driving.loop();
      responsiveVoice.speak("Again!", "UK English Male", {
        volume: 1
      });
    }
  }
  //if state === title then do what's in the function
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
      responsiveVoice.speak("Listen up, I'll be your assisted driver this evening. Listen to my advice and you will get off the highway without a scratch. Fail to listen and you won't be getting off this highway! Get comfortable with the controls, while you still have time. T-Minus 4 seconds.", "UK English Male", {
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
  //bike reset
  bike.x3 = random(200, 240);
  bike.y3 = -400;
  bike.vy3 = 5;
  bike.size3 = 50;
  //bike1 reset
  bike1.x4 = random(360, 400);
  bike1.y4 = 200;
  bike1.vy4 = 5;
  bike1.size4 = 50;
  //timer reset
  timer = 80;
  //responsiveVoice stop playing
  responsiveVoice.cancel();
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
    traffic.setVolume(0.001);
    traffic.play();
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
