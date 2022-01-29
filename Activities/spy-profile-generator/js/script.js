
"use strict";

function setup() {
  createCanvas(500,500);

  if(annyang){
    let commands = {
      'hello': function() {
          alert(`Howdy!`);
      },
      'goodbye': function (){
        alert('CYA!');
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}

function draw() {
background(0);
}
