/**
Racer; start!
Anthony Calderone

Use your exceptional typing capibilities to race fellow users(AI).
Your character's speed depends on how fast you can type, and with minimal mistakes. The idea comes from the website; https://play.typeracer.com/
I felt that I needed to create something that can utilise a junction of what was introduced this semester, therefore, Racer; start! was born.
This project will incorporate JQUERY, CSS, and obviously JAVASCRIPT.

-players move on correct spelling/AI???
-timer
-overtime texts changes(gets smaller, gets larger, the text changes completely mid sentence)
-make the game more distracting when playing

Documentation // tutorials

E5 Haiku Generator
https://www.tutorialrepublic.com/codelab.php?topic=faq&file=javascript-get-the-value-of-text-input-field
https://www.w3schools.com/jsref/jsref_split.asp split the text, as in spliting the words in solo letters into an array
https://stackoverflow.com/questions/6484670/how-do-i-split-a-string-into-an-array-of-characters
https://stackoverflow.com/questions/895171/prevent-users-from-submitting-a-form-by-hitting-enter
https://api.jquery.com/
*/

$(document).ready("#difficulty_dialog"); //on start up load btnGroup first
$('#t-box').hide(); //hides the text box until a level is choosen

let easyLevelSentencesShow = false;
let easyLevelSentencesTyped = false;

let mediumLevelSentencesShow = false;
let mediumLevelSentencesTyped = false;

let hardLevelSentencesShow = false;
let hardLevelSentencesTyped = false;

//EASY LEVEL
let randomSentencesEasy = [
  "It took me too long to realize that the ceiling hadn't been painted to look like the sky. The tour bus was packed with teenage girls heading toward their next adventure.",
  "The urgent care center was flooded with patients after the news of a new deadly virus was made public. The rain pelted the windshield as the darkness engulfed us.",
  "Joe discovered that traffic cones make excellent megaphones. His get rich quick scheme was to grow a cactus farm.",
  "Cursive writing is the best way to build a race track. Flying fish few by the space station.",
  "The overpass went under the highway and into a secret world. The estate agent quickly marked out his territory on the dance floor."
];

//MEDIUM LEVEL
let randomSentencesMedium = [
  "He enjoys practicing his ballet in the bathroom. Don't piss in my garden and tell me you're trying to help my plants grow. His son quipped that power bars were nothing more than adult candy bars.",
  "He wasn't bitter that she had moved on but from the radish. He found rain fascinating yet unpleasant. The heat",
  "It isn't difficult to do a handstand if you just stand on your hands. You bite up because of your lower jaw. At that moment he wasn't listening to music, he was living an experience.",
  "Flying fish few by the space station. The urgent care center was flooded with patients after the news of a new deadly virus was made public. Jim liked driving around town with his hazard lights on.",
  "It's always a good idea to seek shelter from the evil gaze of the sun. He put heat on the wound to see what would grow. Always bring cinnamon buns on a deep-sea diving expedition."
];

//HARD LEVEL
let randomSentencesHard = [
  "Every manager should be able to recite at least ten nursery rhymes backward. Being unacquainted with the chief raccoon was harming his prospects for promotion. Nothing is as cautiously cuddly as a pet porcupine.",
  "If you don't like toenails, you probably shouldn't look at your feet. The tree fell unexpectedly short. Henry couldn't decide if he was an auto mechanic or a priest.",
  "She saw no irony asking me to change but wanting me to accept her for who she is. The stench from the feedlot permeated the car despite having the air conditioning on recycled air. Every manager should be able to recite at least ten nursery rhymes backward.",
  "Peter found road kill an excellent way to save money on dinner. Nothing is as cautiously cuddly as a pet porcupine. Douglas figured the best way to succeed was to do the opposite of what he'd been doing all his life.",
  "The fish listened intently to what the frogs had to say. The thunderous roar of the jet overhead confirmed her worst fears. A quiet house is nice until you are ordered to stay in it for months."
];

//LEVEL DIALOG
$(function() {
  $("#difficulty_dialog").dialog({
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      "Easy": function() {
        $('#btn-easy').on(`click`, btnEasyPress);
        easyLevelSentencesShow = true;
        showInput();
        btnEasyPress();
        $(this).dialog("close");
      },
      "Medium": function() {
        $('#btn-medium').on(`click`, btnMediumPress);
        mediumLevelSentencesShow = true;
        showInput();
        btnMediumPress();
        $(this).dialog("close");
      },
      "Hard": function() {
        $('#btn-hard').on(`click`, btnHardPress);
        hardLevelSentencesShow = true;
        showInput();
        btnHardPress();
        $(this).dialog("close");
      },
    }
  });
});

//shows and focuses on text field
function showInput() {
  $(function() {
    $('#t-box').show().focus();
  });
}

//easy level function
function btnEasyPress() {
  if (easyLevelSentencesShow) {
    $('#easy-level').text("Start typing into the text box!");
    $('#title').text("Racer; start!");
    let random = Math.floor(Math.random() * randomSentencesEasy.length); //chooses a random string from the randomSentencesEasy array

    //creates the random sentences from the div
    let easyIndex = 0;
    const RANDOM_SENTENCES_DIV = $(`#random-sentences-easy`)[easyIndex];

    //splits the characters into single characters including spacing, then placed into an array
    let singularCharactersEasy = randomSentencesEasy[random].split("").map((character) => { //Places the randomized string into an array and then maps over each array using an empty string
      let span = $('<span/>'); //creates the <span>
      $(span).text(character);
      $(RANDOM_SENTENCES_DIV).append(span); //give each character a <span>
      return span; //returns the value of span
    });

    //highlights the first character in the array of singleCharacters
    let currentIndex = 0;
    let initialCharacterEasy = singularCharactersEasy[currentIndex];
    $(initialCharacterEasy).addClass('start'); //adds class 'start' to initialCharacter in the array
    //if keypress is down
    $(document).on('keypress', function({
      key
    }) {
      if (key === $(initialCharacterEasy).text()) {
        $(initialCharacterEasy).removeClass('start'); //removes the class of 'start' if initialCharacter is the same as the character being typed
        $(initialCharacterEasy).addClass('correct'); //add correct class to the correct character typed
        initialCharacterEasy = singularCharactersEasy[currentIndex += 1]; //adds 1 onto the array, moves on to the next character in the array //for loop didn't work here
        console.log(currentIndex);
        $(initialCharacterEasy).addClass('start'); //adds the class 'start'
      }
      //if key isn't the same as initialCharacter then add class 'incorrect' to current index
      else if (key !== $(initialCharacterEasy).text()) {
        $(initialCharacterEasy).addClass('incorrect');
      }
      if (currentIndex === singularCharactersEasy.length) {
        easyLevelSentencesTyped = true;
      }
      if (easyLevelSentencesTyped) {
        easylevelTyped();
      }
    });
  }
}

//medium level function
function btnMediumPress() {
  if (mediumLevelSentencesShow) {
    $('#medium-level').text("Start typing into the text box!");
    $('#title').text("Racer; start!");
    let random = Math.floor(Math.random() * randomSentencesMedium.length); //chooses a random string from the randomSentencesEasy array

    //creates the random sentences from the div
    let mediumIndex = 0;
    const RANDOM_SENTENCES_DIV = $(`#random-sentences-medium`)[mediumIndex];

    //splits the characters into single characters including spacing, then placed into an array
    let singularCharactersMedium = randomSentencesMedium[random].split("").map((character) => { //Places the randomized string into an array and then maps over each array using an empty string
      let span = $('<span/>'); //creates the <span>
      $(span).text(character);
      $(RANDOM_SENTENCES_DIV).append(span); //give each character a <span>
      return span; //returns the value of span
    });

    //highlights the first character in the array of singleCharacters
    let currentIndex = 0;
    let initialCharacterMedium = singularCharactersMedium[currentIndex];
    $(initialCharacterMedium).addClass('start'); //adds class 'start' to initialCharacter in the array
    //if keypress is down
    $(document).on('keypress', function({
      key
    }) {
      if (key === $(initialCharacterMedium).text()) {
        $(initialCharacterMedium).removeClass('start'); //removes the class of 'start' if initialCharacter is the same as the character being typed
        $(initialCharacterMedium).addClass('correct'); //add correct class to the correct character typed
        initialCharacterMedium = singularCharactersMedium[currentIndex += 1]; //adds 1 onto the array, moves on to the next character in the array //for loop didn't work here
        console.log(currentIndex);
        $(initialCharacterMedium).addClass('start'); //adds the class 'start'
      }
      //if key isn't the same as initialCharacter then add class 'incorrect' to current index
      else if (key !== $(initialCharacterMedium).text()) {
        $(initialCharacterMedium).addClass('incorrect');
      }
      if (currentIndex === singularCharactersMedium.length) {
        mediumLevelSentencesTyped = true;
      }
      if (mediumLevelSentencesTyped) {
        mediumlevelTyped();
      }
    });
  }
}

//hard level function
function btnHardPress() {
  if (hardLevelSentencesShow) {
    $('#hard-level').text("Start typing into the text box!");
    $('#title').text("Racer; start!");
    let random = Math.floor(Math.random() * randomSentencesHard.length); //chooses a random string from the randomSentencesEasy array

    //creates the random sentences from the div
    let hardIndex = 0;
    const RANDOM_SENTENCES_DIV = $(`#random-sentences-hard`)[hardIndex];

    //splits the characters into single characters including spacing, then placed into an array
    let singularCharactersHard = randomSentencesHard[random].split("").map((character) => { //Places the randomized string into an array and then maps over each array using an empty string
      let span = $('<span/>'); //creates the <span>
      $(span).text(character);
      $(RANDOM_SENTENCES_DIV).append(span); //give each character a <span>
      return span; //returns the value of span
    });

    //highlights the first character in the array of singleCharacters
    let currentIndex = 0;
    let initialCharacterHard = singularCharactersHard[currentIndex];
    $(initialCharacterHard).addClass('start'); //adds class 'start' to initialCharacter in the array
    //if keypress is down
    $(document).on('keypress', function({
      key
    }) {
      if (key === $(initialCharacterHard).text()) {
        $(initialCharacterHard).removeClass('start'); //removes the class of 'start' if initialCharacter is the same as the character being typed
        $(initialCharacterHard).addClass('correct'); //add correct class to the correct character typed
        initialCharacterHard = singularCharactersHard[currentIndex += 1]; //adds 1 onto the array, moves on to the next character in the array //for loop didn't work here
        $(initialCharacterHard).addClass('start'); //adds the class 'start'
      }
      //if key isn't the same as initialCharacter then add class 'incorrect' to current index
      else if (key !== $(initialCharacterHard).text()) {
        $(initialCharacterHard).addClass('incorrect');
      }
      if (currentIndex === singularCharactersHard.length) {
        hardLevelSentencesTyped = true;
      }
      if (hardLevelSentencesTyped) {
        hardlevelTyped();
      }
    });
  }
}

//dialog box for typing texts on the easy level
function easylevelTyped() {
  $(function() {
    $("#complete_easy_dialog").dialog({
      modal: true,
      buttons: {
        Restart: function() {
          $(this).dialog("close");
          location.reload();
        }
      }
    });
  });
}

//dialog box for typing texts on the medium level
function mediumlevelTyped() {
  $(function() {
    $("#complete_medium_dialog").dialog({
      modal: true,
      buttons: {
        Restart: function() {
          $(this).dialog("close");
          location.reload();
        }
      }
    });
  });
}

//dialog box for typing texts on the hard level
function hardlevelTyped() {
  $(function() {
    $("#complete_hard_dialog").dialog({
      modal: true,
      buttons: {
        Restart: function() {
          $(this).dialog("close");
          location.reload();
        }
      }
    });
  });
}

//prevents the player from pressing 'enter' to refresh the page
$(window).keydown(function(key) {
  if (key.keyCode === 13) {
    event.preventDefault();
    return false;
  }
});
