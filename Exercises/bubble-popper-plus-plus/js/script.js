/*
Pop them bubbles!
*/

"use strict";
//user's webcam
let video = undefined;
//handpose model
let handpose = undefined;
//current set of predictions
let predictions = [];
let bubble = undefined;

function setup() {
  createCanvas(640, 480);

  // access user's webcam
  video = createCapture(VIDEO);
  video.hide();

  //loads handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    console.log("loaded");
  });

  //listen for predictions
  handpose.on(`predict`, function(results) {
    console.log(results);
    predictions = results;
  });
  //bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  };
}

function draw() {
  background(0);
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
    }
  }
  //bubble move
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;
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
