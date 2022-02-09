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
  //border class
  border = new Border();
  //box class
  box = new Box();
}

function draw() {
  background(100);
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
function boxSimulation(){
  box.display();
}
