"use strict";

const animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];
let currentAnimal = ``;
let currentAnswer = ``;
let totalGuesses = 10;



function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang) {
    let commands = {
      '*animal': guessAnimal
    };
    annyang.addCommands(commands);
    annyang.start();
    textSize(32);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }
}

let state = 'menu';

function draw() {
  background(94, 144, 196);

  //states
  if (state === 'menu') {
    menu();
  } else if (state === "start") {
    amountOfGuesses();
    animalGuess();
  } else if (state === "end") {
    tooManyGuesses();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    currentAnimal = random(animals);
    let reverseAnimal = reverseString(currentAnimal);
    responsiveVoice.speak(reverseAnimal);
  }
}
//checks to see if guess is right or wrong
function animalGuess() {
  if (currentAnswer === currentAnimal) {
    textSize(50);
    fill(138, 245, 66 + sin(frameCount * .2) * 128);
  } else {
    textSize(50);
    fill(255, 0, 0 + cos(frameCount * .2) * 128);
  }
  text(currentAnswer, width / 2, height / 2);
}
function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
  if(currentAnswer === currentAnimal){
    totalGuesses++;
  }
  if(currentAnswer !== currentAnimal){
    totalGuesses--;
  }
  if(totalGuesses === 0){
    state = 'end';
  }
}

function reverseString(string) {
  // split the string into an array of chracters
  let characters = string.split('');
  // reverse the array of characters
  let reverseCharacters = characters.reverse();
  // join the array of characters back into the string
  let result = reverseCharacters.join('');
  // return the result
  return result;
}

function menu() {
  push();
  cursor(CROSS);
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  textSize(50);
  background(7, 145, 127);
  fill(0);
  text("To play; just say what animal you think is being said. EX: 'Dog'", width / 2, 800);
  fill(0 + cos(frameCount * .2) * 128);
  text("Press SPACE to begin!", width / 2, 1100);
  fill(0);
  text("Use the arrow up key for reversed animal names to be spoken!", width / 2, 900);
  fill(0);
  text("You have 10 guesses in total!", width / 2, 1000);
  pop();
  if (keyCode === 32) {
    state = 'start';
  }
}

function amountOfGuesses() {
  push();
  cursor(CROSS);
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  textSize(50);
  background(7, 145, 127);
  fill(0);
  textSize(30);
  text("Total Guesses:", 1300, 50);
  fill(0);
  text(totalGuesses, width / 2, 50);
  pop();
}

function tooManyGuesses() {
  push();
  cursor(CROSS);
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  textSize(50);
  background(7, 145, 127);
  fill(0);
  textSize(50);
  text("You have no more guesses left!", width / 2, height / 2);
  pop();
}
