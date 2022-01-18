"use strict";

const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 50;

let animalImages = [];
let animals = [];

let sausageDogImage = undefined;
let sausageDog = undefined;

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

  function createDog() {
    let x = random(0, width);
    let y = random(0, height);
    sausageDog = new SausageDog(x, y, sausageDogImage);
  }
}
//state
let state = "start";

function draw() {
  background(0);
  if (state === "start") {
    menu();
  } else if (state === "level") {
    updateAnimals();
    updateDog();
  } else if (state === "finish") {
    finish();
  }

  function updateAnimals() {
    for (let i = 0; i < animals.length; i++) {
      animals[i].update();
    }
  }

  function updateDog() {
    sausageDog.update();
  }
}
function mousePressed() {
  sausageDog.mousePressed();
  if(state === "start"){
    state = "level";
  }
}

function menu(){
  push();
  cursor(CROSS);
  strokeWeight(2);
  textAlign(CENTER,CENTER);
  textSize(50);
  background(100);
  fill(0 + cos(frameCount *.2) * 128);
  text("Find the Sausage Dog!", width/2, height/2);
  //play button
  fill(255);
  text("Play!", width/2, 1000);
  pop();
}
function finish(){
  push();
  cursor(CROSS);
  strokeWeight(2);
  textAlign(CENTER,CENTER);
  textSize(50);
  background(100);
  fill(0 + cos(frameCount *.2) * 128);
  text("You've found the Dog!", width/2, height/2);
}
