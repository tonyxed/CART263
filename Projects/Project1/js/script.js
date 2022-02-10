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

//tree
// let objects = {
//   trees: [],
//   numTrees: 2,
// };

//score
let score = 0;

//canvas properties
const WIDTH = 600;
const HEIGHT = 1000;

function preload() {
  userPic = loadImage("assets/images/user.png");
  treePic = loadImage("assets/images/tree.png");
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
  //tree class
  // for (let i = 0; i < objects.numTrees; i++) {
  //   let x = random(-40, -20);
  //   let y = random(600, 0);
  //   let vy = 5;
  //   let tree = new Tree(x, y, vy)
  //   objects.trees.push(tree);
  // }
}

function draw() {
  background(23, 191, 121);
  roadSimulation();
  linesSimulation();
  userSimulation();
  borderSimulation();
  //treeSimulation();
  boxSimulation();
  scoreText();
}
//userSimulation
function userSimulation() {
  user.display();
  user.simulation();
  user.constrain();
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
// function treeSimulation() {
//   for (let i = 0; i < objects.trees.length; i++) {
//     objects.trees[i].display();
//     objects.trees[i].movement();
//     objects.trees[i].offScreen();
//   }
// }
function scoreText(){
  push();
  fill(255);
  textSize(30);
  textAlign(BOTTOM,BOTTOM);
  text(score, 330, 970);
  pop();
  push();
  fill(255);
  textSize(30);
  textAlign(BOTTOM,BOTTOM);
  text("Score:", 220, 970);
  pop();
}
