/*
Pop them bubbles!

FYI: AI IS KINDA BUGGY SO CONTENT WAS TOUGH TO IMPLEMENT!

*/

"use strict";
//user's webcam
let video = undefined;
//handpose model
let handpose = undefined;
//current set of predictions
let predictions = [];
let bubble = undefined;
// bubbles popped
let bubblesPop = 0;
// score to beat
let scoreBeat = 10;
//sound
let bubblePop;

//sound
function preload() {
  bubblePop = loadSound("assets/sounds/Pop.mp3");
}

//setup
function setup() {
  createCanvas(640, 480);

  // access user's webcam
  video = createCapture(VIDEO);
  video.hide();

  //loads handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    state = "game";
  });

  //listen for predictions
  handpose.on(`predict`, function(results) {
    predictions = results;
  });

  //bubble
  bubble = {
    x: random(width),
    y: height,
    size: 70,
    vx: 0,
    vy: -2,
    speed: 5,
  };
}
let state = 'loading'; //state

function draw() {
  background(0);

  //states
  if (state === 'loading') {
    loadingScreen();
  } else if (state === 'game') {
    bubblePopText();
    scoreToBeat();
    simulation();
  } else if (state === "end") {
    ending();
  }
}

// bubble and handpose simulation
function simulation() {
  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];
    //pin body
    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(3);
    line(baseX, baseY, tipX, tipY);
    pop();
    //pin head
    push();
    noStroke();
    fill(255, 0, 0);
    ellipse(baseX, baseY, 20);
    pop();

    //check bubble pop
    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      bubble.x = random(width);
      bubble.y = height;
      bubblesPop += 1;
      bubblePop.play();
    }
    // bubbles popped === to highscore then end state
    if (bubblesPop == scoreBeat) {
      state = 'end';
    }
  }
  //bubble move
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  //speed of the bubble on the y axis
  bubble.y -= bubble.speed;

  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  }
  push();
  fill(0, 100, 200);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}

// text showing the amount of bubbles popped
function bubblePopText() {
  push();
  fill(255);
  textSize(30);
  text(bubblesPop, width / 2, 50);
  pop();
  push();
  fill(255);
  textSize(30);
  text("Use index finger to pop the bubbles.", 100, height / 2);
  pop();
}
// text showing a loading screen
function loadingScreen() {
  push();
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("LOADING CONTENT...", width / 2, height / 2);
  pop();
}
// score to beat
function scoreToBeat() {
  push();
  fill(255);
  textSize(30);
  text(scoreBeat, width / 2, 100);
  pop();
  push();
  fill(255);
  textSize(30);
  text("Score to Beat:", 120, 100);
  pop();
}

function ending() {
  push();
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("NICE!", width / 2, height / 2);
  pop();
}
