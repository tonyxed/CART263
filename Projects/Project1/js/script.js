/**
The Need for the Speed!
Anthony Calderone

My own silly take on the film; Need For Speed!
*/
"use strict";

//pictures
let userPic;

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
//canvas properties
const WIDTH = 900;
const HEIGHT = 1000;

function preload() {
  userPic = loadImage("assets/images/user.png");
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  //player class
  let x = 450;
  let y = 900;
  let size = 40;
  let speed = 4;
  let vx = 0;
  user = new Player(x, y, size, speed, vx);
  //Border class
  border = new Border();
  //Box class
  box = new Box();
  //Road class
  road = new Road();
  //line class
  lines = new Lines();
}

function draw() {
  background(23, 191, 121);
  roadSimulation();
  linesSimulation();
  userSimulation();
  borderSimulation();
  boxSimulation();
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

function roadSimulation() {
  road.display();
}

function linesSimulation() {
  lines.display();
  lines.movement();
  lines.offScreen();
}
