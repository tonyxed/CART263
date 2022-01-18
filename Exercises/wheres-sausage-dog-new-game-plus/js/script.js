"use strict";

const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;

let animalImages = [];
let animals = [];

let sausageDogImage = undefined;
let sausageDog = undefined;

let timer = 10;

function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage);
  }
  sausageDogImage = loadImage('assets/images/sausage-dog.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createAnimals();
  createDog();
  //creates the animals from the animals class
  function createAnimals() {
    //create the animals
    for (let i = 0; i < NUM_ANIMALS; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let animalImage = random(animalImages);
      let animal = new Animal(x, y, animalImage);
      animals.push(animal);
    }
  }
  //creates the dog from the dog class
  function createDog() {
    let x = random(0, width);
    let y = random(0, height);
    sausageDog = new SausageDog(x, y, sausageDogImage);
  }
}
//state
let state = "start";

function draw() {
  background(63, 64, 58);
  if (state === "start") {
    menu();
  } else if (state === "level") {
    updateAnimals();
    updateDog();
    level1();
  } else if (state === "finish") {
    finish();
  } else if (timer === 0){
    timerLose();
  }
  // displays the animals in the array
  function updateAnimals() {
    for (let i = 0; i < animals.length; i++) {
      animals[i].update();
      animals[i].floating();
      animals[i].move();
    }
  }
// displays the dog
  function updateDog() {
    sausageDog.update();
  }
}
//mousePressed
function mousePressed() {
  sausageDog.mousePressed();
  if(state === "start"){
    state = "level";
  }
}
//menu state
function menu(){
  push();
  cursor(CROSS);
  strokeWeight(2);
  textAlign(CENTER,CENTER);
  textSize(50);
  background(100);
  fill(0 + cos(frameCount *.2) * 128);
  text("Find the Sausage Dog! You have 10 seconds to do it!", width/2, height/2);
  fill(0 + sin(frameCount *.2) * 128);
  text("Use the mouse to begin!", width/2, 900);
}
//finish state
function finish(){
  push();
  cursor(CROSS);
  strokeWeight(2);
  textAlign(CENTER,CENTER);
  textSize(50);
  background(100);
  fill(0 + cos(frameCount *.2) * 128);
  text("You've found the Dog!", width/2, height/2);
  fill(0 + sin(frameCount *.2) * 128);
  text("Press SPACE to find the Dog again!", width/2, 1000);
  if(keyCode === 32){
    location.reload();
    state = "level";
  }
}
//level1 state
function level1(){
  textSize(50);
  fill(255);
  text(timer, width/2, 700);
  //timerCountdown
  if(frameCount % 60 === 0 && timer > 0){
    timer--;
  }
  if(timer === 0){
    state = "timerLose";
  }
}
//timer state
function timerLose(){
  push();
  background(0);
  textSize(30);
  textStyle(BOLDITALIC);
  fill(255);
  textAlign(CENTER, CENTER);
  text("You've ran out of time!", width / 2, 700);
  pop();
  fill(0 + cos(frameCount *.2) * 128);
  text("Press SPACE to try again!", width/2, 1000);
  if(keyCode === 32){
    location.reload();
    state = "level";
  }
}
