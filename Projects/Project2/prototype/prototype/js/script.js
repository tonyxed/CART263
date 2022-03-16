/**
Racer; start!
Anthony Calderone

Prototype: Use your exceptional typing capibilities to race fellow users(AI).
Your character's speed depends on how fast you can type, and with minimal mistakes. The idea comes from the website; https://play.typeracer.com/
I felt that I needed to create something that can utilise a junction of what was introduced this semester, therefore, Racer; start! was born.
This project will encoorporate JQUERY, CSS, and obviously JAVASCRIPT.

With regards to my previous project, I felt that I neeeded to actually make an effort and prove that I can get higher than a B, so I decided why not, i'll do my best to get myself on the CART website as a project to show to future students taking the course.
This is my goal when creating this interactive project.

/*
-correct word/letters turn green on correct and vice versa with red on wrong
-players move on correct spelling
-AI???
-prompt showing up asking which level to type on? easy to impossible with harder sentences + less time to type
-accuracy to the typing? WPM??? CPM???
-timer

Documentation // tutorials

E5 Haiku Generator
https://www.tutorialrepublic.com/codelab.php?topic=faq&file=javascript-get-the-value-of-text-input-field
https://www.w3schools.com/jsref/jsref_split.asp split the text, as in spliting the words in solo letters into an array
https://stackoverflow.com/questions/6484670/how-do-i-split-a-string-into-an-array-of-characters
https://stackoverflow.com/questions/895171/prevent-users-from-submitting-a-form-by-hitting-enter
https://api.jquery.com/

*/

"use strict";

//**only 4 to see if it works, will place more in the project later**//
//EASY LEVEL
let randomSentencesEasy = [
  "It took me too long to realize that the ceiling hadn't been painted to look like the sky. The tour bus was packed with teenage girls heading toward their next adventure.",
  "The urgent care center was flooded with patients after the news of a new deadly virus was made public. The rain pelted the windshield as the darkness engulfed us.",
  "Joe discovered that traffic cones make excellent megaphones.",
  "His get rich quick scheme was to grow a cactus farm."
];

//selects a random sentence from the variable of randomSentences
let random = Math.floor(Math.random() * randomSentencesEasy.length); // to get variable of randomSentences you need to use (randomSentences[random])

//creates the random sentences from the div
const RANDOM_SENTENCES_DIV = $(`#random-sentences`)[0];

//splits the characters into single characters including spacing. Then placed into an array
let singularCharacters = randomSentencesEasy[random].split("").map((character) => { //Places the randomized string into an array and then loops over each array using an empty string
  let span = document.createElement("span");
  $("body").append([span]); //appends span element to the body
  $(span).text(character); //innerText the appended [span]
  RANDOM_SENTENCES_DIV.appendChild(span); //appends span to each string in the array including spaces
  return span; //returns the value of span // errors would appear if I didn't return the value of the span
});

//highlights the first character in the array of singleCharacters
let currentIndex = 0;
let initialCharacter = singularCharacters[currentIndex];
$(initialCharacter).addClass('start'); //whichever # is in the array, add a class for it and edit its CSS

//if keypress is down
$(document).on('keypress', function({
  key
}) {
  console.log(key);
  if (key === $(initialCharacter).text()) {
    $(initialCharacter).removeClass('start'); //removes the class of 'start' if initialCharacter is the same as the character being typed
    $(initialCharacter).addClass('correct'); //add correct class to the correct character typed
    initialCharacter = singularCharacters[++currentIndex]; //adds 1 onto the index // moves on to the next character in the array
    $(initialCharacter).addClass('start'); //adds the class 'start'
  }
  //if key isn't the same as initialCharacter then add class 'incorrect' to current index
  else if (key !== $(initialCharacter).text()) {
    $(initialCharacter).addClass('incorrect');
  }
  if (currentIndex === singularCharacters.length) {
    alert("DONE"); //temporary
    location.reload(); //temporary
  }
});

//prevents the player from using 'enter' to refresh the page
$(window).keydown(function(key) {
  if (key.keyCode === 13) {
    event.preventDefault();
    return false;
  }
});
