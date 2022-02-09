/**
The Need for the Speed!
Anthony Calderone

A really dubbed down version of the film; Need For Speed!
*/
//durability (sound effect hit will wall + other cars)

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
  user = new Player();
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
  boxSimulation();
  roadSimulation();
  linesSimulation();
  userSimulation();
  borderSimulation();

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
