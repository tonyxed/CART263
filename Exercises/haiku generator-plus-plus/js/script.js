/**
Haiku Generator-plus-plus
Anthony Calderone

Geneates a random Haiku.
*/

"use strict";

//fiveSyllableLines array
let fiveSyllableLines = [
  `Oh thee oh thee`,
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

//oneWordLines array
let oneWordLines = [
  `Sharp,`,
  `Imperfect,`,
  `Divide,`,
  `Upset,`,
  `Remark,`,
  `Acidic,`,
  `Protect,`,
  `Peace,`,
  `Mistake,`,
  `Occurence,`,
  `Maddly,`,
  `Sad,`,
  `Disturbed,`
];

//title array
let titleLines = [
  `SPEAR AND SICKLE`,
  `DROWN THE SPECTER`,
  `ABYSS AND SEERS`,
  `MARK OF FIRE`,
  `THE WEEPING DREAM`,
  `TRAP THE OATH`,
  `VISION OF FIRE`
];

//sets random syllable lines into random variables
let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);
let word = random(oneWordLines);

//sets titleLines into variable
let title = random(titleLines);

//gets hold of each P tag
let line1P = document.getElementById(`line-1`);
let line2P = document.getElementById(`line-2`);
let line3P = document.getElementById(`line-3`);
let titleP = document.getElementById(`title`);
let wordP = document.getElementById(`oneWord`);

//set innerText to appropriate line
line1P.innerText = line1;
line2P.innerText = line2;
line3P.innerText = line3;
titleP.innerText = title;
wordP.innerText = word;

//click events
line1P.addEventListener(`mouseover`, lineClicked);
line2P.addEventListener(`mouseover`, lineClicked);
line3P.addEventListener(`mouseover`, lineClicked);
titleP.addEventListener(`mouseover`, lineClicked);
wordP.addEventListener(`mouseover`, lineClicked);

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
  } else if (element === titleP) {
    element.innerText = random(titleLines);
  } else if (element === wordP) {
    element.innerText = random(oneWordLines);
  }
}

//chooses a random line from the syllable arrays
function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}
