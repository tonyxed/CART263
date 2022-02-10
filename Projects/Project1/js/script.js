/**
The Need for the Speed!
Anthony Calderone

A really dubbed down version of the film; Need For Speed!
*/
//durability (sound effect hit will wall + other cars)

"use strict";

//pictures
let userPic;
let treePic;
let carPic1;
let carPic2;
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

//tree
let objects = {
  trees: [],
  numTrees: 10,
};

//score
let score = 0;

//lives
let lives = 3;

//canvas properties
const WIDTH = 600;
const HEIGHT = 1000;

function preload() {
  userPic = loadImage("assets/images/user.png");
  treePic = loadImage("assets/images/tree.png");
  carPic1 = loadImage("assets/images/car.png");
  carPic2 = loadImage("assets/images/car2.png");
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
  let x = random(120, 270);
  let y = random(25, 70);
  let vy = 5;
  let size = 50;
  car1 = new Car1(x, y, vy, size);
  //car2 class
  let x1 = random(120, 270);
  let y1 = -300;
  let vy1 = 5;
  let size1 = 50;
  car2 = new Car2(x1, y1, vy1,size1);
  //tree class
  for (let i = 0; i < objects.numTrees; i++) {
    let x = random(0, -10);
    let y = random(0, 900);
    let vy = 5;
    let tree = new Tree(x, y, vy)
    objects.trees.push(tree);
  }
}

function draw() {
  background(23, 191, 121);
  roadSimulation();
  linesSimulation();
  borderSimulation();
  car1Simulation();
  car2Simulation();
  userSimulation();
  //treeSimulation();
  boxSimulation();
  scoreText();
  livesText();
}
//userSimulation
function userSimulation() {
  user.display();
  user.simulation();
  user.constrain();
  user.collision1();
  user.collision2();
}
//borderSimulation
function borderSimulation() {
  border.display();
}
//boxSimulation
function boxSimulation() {
  box.display();
}
//roadSimulation
function roadSimulation() {
  road.display();
}
//linesSimulation
function linesSimulation() {
  lines.display();
  lines.movement();
  lines.offScreen();
}
//treeSimulation
function treeSimulation() {
  for (let i = 0; i < objects.trees.length; i++) {
    objects.trees[i].display();
    objects.trees[i].movement();
    objects.trees[i].offScreen();
  }
}
//car1Simulation
function car1Simulation() {
    car1.display();
    car1.movement();
    car1.offScreen();
}
//car2Simulation
function car2Simulation() {
    car2.display();
    car2.movement();
    car2.offScreen();
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
