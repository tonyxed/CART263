/**
Haiku Generator-plus-plus
Anthony Calderone

Geneates a random Haiku.
*/

"use strict";

//fiveSyllableLines array
let fiveSyllableLines = [
  `0 to be a tree`,
  `The cat does not know`,
  `We are all forests`,
  `You have done your best`,
  `They are all gone now`,
  `Death shall bring railings`,
  `And the passersby never whispering`,
  `An echo murmured back the word, 'mere!'`
];

//sevenSyllableLines array
let sevenSyllableLines = [
  `Say the things left unsaid`,
  `Never believe the wind's lies`,
  `The autumn stretches its legs`,
  `Nothing can satisfy you`,
  `They will not come back again`,
  `Once upon a midnight lonely`,
  `Once I sat engaged and pathing`,
  `Distancing and distancing with my parkway`
];

//title array
let titleLines = [
  `TITLE: SPEAR AND SICKLE`,
  `TITLE: DROWN THE SPECTER`,
  `TITLE: ABYSS AND SEERS`,
  `TITLE: MARK OF FIRE`,
  `TITLE: THE WEEPING DREAM`,
  `TITLE: TRAP THE OATH`,
  `TITLE: VISION OF FIRE`
];

//sets random syllable lines into random variables
let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);

//sets titleLines into variable
let title = random(titleLines);

//gets hold of each P tag
let line1P = document.getElementById(`line-1`);
let line2P = document.getElementById(`line-2`);
let line3P = document.getElementById(`line-3`);
let titleP = document.getElementById(`title`);

//set innerText to appropriate line
line1P.innerText = line1;
line2P.innerText = line2;
line3P.innerText = line3;
titleP.innerText = title;

//click events
line1P.addEventListener(`click`, lineClicked);
line2P.addEventListener(`click`, lineClicked);
line3P.addEventListener(`click`, lineClicked);
titleP.addEventListener(`click`, lineClicked);

//click on a line
function lineClicked(event) {
  fadeOut(event.target, 1);
}

//fades out
function fadeOut(element, opacity) {
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(function() {
      fadeOut(element, opacity);
    });
  } else {
    setNewLine(element);
    fadeIn(element, 0);
  }
}

//fades in
function fadeIn(element, opacity) {
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  if (opacity < 1) {
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    });
  }
}
//randomizes a line
function setNewLine(element) {
  if (element === line1P || element === line3P) {
    element.innerText = random(fiveSyllableLines);
  } else if (element === line2P) {
    element.innerText = random(sevenSyllableLines);
  } else if (element === titleP){
    element.innerText = random(titleLines);
  }
}

//chooses a random line from the syllable arrays
function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}
