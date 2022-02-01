"use strict";
//repentance


//change their spyProfile to whatever they want(weapon etc...)

let spyProfile = {
  name: `**N/A**`,
  alias: `**N/A**`,
  secretWeapon: `**N/A**`,
  username: `**N/A**`,
  password: `**N/A**`
};

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;

function preload() {
  instrumentData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json');
  objectData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json');
  tarotData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem('data_spy'));
  if (data !== null) {
    let password = prompt('Password?');
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.username = data.username;
      spyProfile.password = data.password;
    }
  } else {
    generateSpyProfile();
  }
}

function generateSpyProfile() {
  spyProfile.name = prompt(`What is your name?`);
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

  localStorage.setItem('data_spy',JSON.stringify(spyProfile));
}

function draw() {
  background(255);

  let profile = `**CONFIDENTIAL!**

  Name: ${spyProfile.name}
  Alias: ${spyProfile.alias}
  Secret Weapon: ${spyProfile.secretWeapon}
  Password: ${spyProfile.password}`;

  push();
  textFont(`Bold, monospace`);
  textSize(24);
  textAlign(LEFT, TOP);
  fill(0);
  text(profile, 100, 100);
  pop();
}
// using keys to change their profile
function keyPressed(){
  //UP_ARROW secretWeapon
  if(keyCode === UP_ARROW){
    spyProfile.secretWeapon = random(objectData.objects);
    localStorage.setItem('data_spy',JSON.stringify(spyProfile));
  }
  if(keyCode === DOWN_ARROW){
    let card = random(tarotData.tarot_interpretations);
    spyProfile.password = random(card.keywords);
    localStorage.setItem('data_spy',JSON.stringify(spyProfile));
  }
}
