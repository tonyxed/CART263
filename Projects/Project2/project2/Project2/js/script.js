/**
Racer; start!
Anthony Calderone

Use your exceptional typing capibilities to race your way to victory.
I felt that I needed to create something that can utilise a junction of what was introduced this semester, therefore, Racer; start! was born.
This project will incorporate JQUERY, CSS, and obviously JAVASCRIPT.

-have dialog for each level explaining each level
-medium level = text gets large, then super small and vice versa - add hamster of something when elevator music is playing -
-hard level = text is moving around everywhere on the screen.

Documentation // tutorials

E5 Haiku Generator
https://www.tutorialrepublic.com/codelab.php?topic=faq&file=javascript-get-the-value-of-text-input-field
https://www.w3schools.com/jsref/jsref_split.asp split the text, as in spliting the words in solo letters into an array
https://stackoverflow.com/questions/6484670/how-do-i-split-a-string-into-an-array-of-characters
https://stackoverflow.com/questions/895171/prevent-users-from-submitting-a-form-by-hitting-enter
https://api.jquery.com/
https://codepen.io/P1N2O/pen/pyBNzX - BACKGROUND GRADIENT
*/

$(document).ready(difficultyDialog); //on start up load btnGroup first
$('#t-box').hide(); //hides the text box until a level is choosen

let easyLevelSentencesShow = false;
let easyLevelSentencesTyped = false;

let mediumLevelSentencesShow = false;
let mediumLevelSentencesTyped = false;

let hardLevelSentencesShow = false;
let hardLevelSentencesTyped = false;

let blink = false;

//EASY LEVEL
let randomSentencesEasy = [
  "It took me too long to realize that the ceiling hadn't been painted to look like the sky. The tour bus was packed with teenage girls heading toward their next adventure. The miniature pet elephant became the envy of the neighborhood.",
  "The urgent care center was flooded with patients after the news of a new deadly virus was made public. The rain pelted the windshield as the darkness engulfed us.",
  "Joe discovered that traffic cones make excellent megaphones. His get rich quick scheme was to grow a cactus farm. Going from child, to childish, to childlike is only a matter of time.",
  "Cursive writing is the best way to build a race track. Flying fish few by the space station. Joyce enjoyed eating pancakes with ketchup.",
  "The overpass went under the highway and into a secret world. The estate agent quickly marked out his territory on the dance floor. People generally approve of dogs eating cat food but not cats eating dog food."
];

//MEDIUM LEVEL
let randomSentencesMedium = [
  "He enjoys practicing his ballet in the bathroom. Don't piss in my garden and tell me you're trying to help my plants grow. His son quipped that power bars were nothing more than adult candy bars.",
  "He wasn't bitter that she had moved on but from the radish. He found rain fascinating yet unpleasant. It isn't difficult to do a handstand if you just stand on your hands. You bite up because of your lower jaw. At that moment he wasn't listening to music, he was living an experience.",
  "Flying fish few by the space station. The urgent care center was flooded with patients after the news of a new deadly virus was made public. Jim liked driving around town with his hazard lights on. It's always a good idea to seek shelter from the evil gaze of the sun. He put heat on the wound to see what would grow. Always bring cinnamon buns on a deep-sea diving expedition."
];
//MEDIUM LEVEL New
let randomSentencesMediumNew = [
  ".srab ydnac tluda naht erom gnihton erew srab rewop taht deppiuq nos siH .worg stnalp ym pleh ot gniyrt er'uoy em llet dna nedrag ym ni ssip t'noD .moorhtab eht ni tellab sih gnicitcarp syojne eH",
  ".ecneirepxe na gnivil saw eh ,cisum ot gninetsil t'nsaw eh tnemom taht tA .waj rewol ruoy fo esuaceb pu etib uoY .sdnah ruoy no dnats tsuj uoy fi dnatsdnah a od ot tluciffid t'nsi tI .tnasaelpnu tey gnitanicsaf niar dnuof eH .hsidar eht morf tub no devom dah ehs taht rettib t'nsaw eH",
  ".noitidepxe gnivid aes-peed a no snub nomannic gnirb syawlA .worg dluow tahw ees ot dnuow eht no taeh tup eH .nus eht fo ezag live eht morf retlehs kees ot aedi doog a syawla s'tI .no sthgil drazah sih htiw nwot dnuora gnivird dekil miJ .cilbup edam saw suriv yldaed wen a fo swen eht retfa stneitap htiw dedoolf saw retnec erac tnegru ehT .noitats ecaps eht yb wef hsif gniylF"
];

//MEDIUM LEVEL NEW NEW
let randomSentencesMediumNewNew = [
  "He enjoys practicing his ballet in the bathroom. Don't piss in my garden and tell me you're trying to help my plants grow. His son quipped that power bars were nothing more than adult candy bars.",
  "He wasn't bitter that she had moved on but from the radish. He found rain fascinating yet unpleasant. It isn't difficult to do a handstand if you just stand on your hands. You bite up because of your lower jaw. At that moment he wasn't listening to music, he was living an experience.",
  "Flying fish few by the space station. The urgent care center was flooded with patients after the news of a new deadly virus was made public. Jim liked driving around town with his hazard lights on. It's always a good idea to seek shelter from the evil gaze of the sun. He put heat on the wound to see what would grow. Always bring cinnamon buns on a deep-sea diving expedition."
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
function difficultyDialog() {
  $(function() {
    $("#difficulty_dialog").dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Easy": function() {
          timerEasyStart();
          $(this).dialog("close");
          responsiveVoice.speak("Easy level selected", "UK English Male");
          responsiveVoice.speak("This level is quite unchallenging, should be a breeze.", "UK English Male");
          responsiveVoice.speak("Get ready to type in:", "UK English Male");
          responsiveVoice.speak("3", "UK English Male");
          responsiveVoice.speak("2", "UK English Male");
          responsiveVoice.speak("1", "UK English Male");
        },
        "Medium": function() {
          timerMediumStart();
          $(this).dialog("close");
          responsiveVoice.speak("Medium level selected", "UK English Male");
          responsiveVoice.speak("This level has superb coding, you will see!", "UK English Male");
          responsiveVoice.speak("3", "UK English Male");
          responsiveVoice.speak("2", "UK English Male");
          responsiveVoice.speak("1", "UK English Male");
        },
        "Hard": function() {
          timerHardStart();
          $(this).dialog("close");
          responsiveVoice.speak("Hard level selected. Get ready to Type!", "UK English Male");
          responsiveVoice.speak("3", "UK English Male");
          responsiveVoice.speak("2", "UK English Male");
          responsiveVoice.speak("1", "UK English Male");
        },
      }
    });
  });
}

//easy level function
function btnEasyPress() {
  blinkText();
  timerCountdownEasy();
  if (easyLevelSentencesShow) {
    $('#easy-level').text("Easy!");
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
  timerCountdownMedium();
  if (mediumLevelSentencesShow) {
    $('#medium-level').text("Medium!");
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
        $("#random-sentences-medium").animate({
          left: "+=1000",
          height: "toggle"
        }, 10, function() {});
        $(initialCharacterMedium).removeClass('start'); //removes the class of 'start' if initialCharacter is the same as the character being typed
        $(initialCharacterMedium).addClass('correct'); //add correct class to the correct character typed
        initialCharacterMedium = singularCharactersMedium[currentIndex += 1]; //adds 1 onto the array, moves on to the next character in the array //for loop didn't work here
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
  timerCountdownHard();
  if (hardLevelSentencesShow) {
    $('#hard-level').text("Hard!");
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

//blinks the text on the easy level
function blinkText() {
  startTime = new Date();
  let myTimer = setInterval(function() {
    $("#timer").text(Math.round((new Date - startTime) / 1000));
    if ($("#timer" == 6)) {
      blink = true;
      if (blink) {
        $(`#random-sentences-easy`).fadeOut(500);
        $(`#random-sentences-easy`).fadeIn(500);
        $(`#random-sentences-easy`).effect("shake");
      }
    }
  }, 1000);
}

//timerEasyCountdown
function timerEasyStart() {
  startTime = new Date();
  let myTimer = setInterval(function() {
    $("#timer").text(Math.round((new Date - startTime) / 1000));
    if ($("#timer" == 3)) {
      easyLevelSentencesShow = true;
    }
    if (easyLevelSentencesShow) { //if easyLevelSentencesShow = true, then the timer stops
      clearInterval(myTimer);
      showInput();
      btnEasyPress();
    }
  }, 9000);
}

//timerMediumCountdown
function timerMediumStart() {
  startTime = new Date();
  let myTimer = setInterval(function() {
    $("#timer").text(Math.round((new Date - startTime) / 1000));
    if ($("#timer" == 3)) {
      mediumLevelSentencesShow = true;
    }
    if (mediumLevelSentencesShow) { //if mediumLevelSentencesShow = true, then the timer stops
      clearInterval(myTimer);
      showInput();
      btnMediumPress();
    }
  }, 7600);
}

//timerHardCountdown
function timerHardStart() {
  startTime = new Date();
  let myTimer = setInterval(function() {
    $("#timer").text(Math.round((new Date - startTime) / 1000));
    if ($("#timer" == 3)) {
      hardLevelSentencesShow = true;
    }
    if (hardLevelSentencesShow) { //if hardLevelSentencesShow = true, then the timer stops
      clearInterval(myTimer);
      showInput();
      btnHardPress();
    }
  }, 5200);
}

//timerCountdownEasy
function timerCountdownEasy() {
  let timeLeft = 45;
  let timerCountdown = setInterval(function() {
    if (timeLeft == 21) {
      responsiveVoice.speak("20 Seconds remain!", "UK English Male");
    }
    if (timeLeft <= 0) {
      clearInterval(timerCountdownEasy);
      easyLevelTime();
    } else {
      $("#timerDisplay").text(timeLeft + " seconds left!");
    }
    if (easyLevelSentencesTyped) {
      timeLeft += 1;
      clearInterval(timerCountdownEasy);
    }
    timeLeft -= 1;
  }, 1000);
}

//timerCountdownMedium
function timerCountdownMedium() {
  let relapse = true;
  let timeLeft = 130;
  let timerCountdown = setInterval(function() {
    if (timeLeft == 125) {
      responsiveVoice.speak("There seems to be something wrong with the code, give me a second!", "UK English Male");
    }
    if (timeLeft == 120) {
      responsiveVoice.speak("Recalibrating!", "UK English Male");
      responsiveVoice.speak("While we wait for the technicians to fix the issue, here is some relaxing music to sooth the brain!", "UK English Male");
      $('#random-sentences-medium').empty();
    }
    if (timeLeft == 113) {
      music.play();
    }
    if (timeLeft == 100) {
      music.pause();
      music.currentTime = 0;
      responsiveVoice.speak("Don't look at me like that, this wasn't my fault!", "UK English Male");
    }
    if (timeLeft == 97) {
      music.play();
    }
    if (timeLeft == 80) {
      music.pause();
      music.currentTime = 0;
      responsiveVoice.speak("Resolved, you may continue", "UK English Male");
      returnMediumTextNew();
      showInput();
    }
    if (timeLeft == 75) {
      $('#random-sentences-medium-new').empty();
      $('#random-sentences-medium-new').remove();
      $('#random-sentences-medium-new').hide();
      responsiveVoice.speak("They seem to have broken it entirely, hold on please!", "UK English Male");
    }
    if (timeLeft == 71) {
      music.play();
    }
    if (timeLeft == 68) {
      music.pause();
      music.currentTime = 0;
      responsiveVoice.speak("Working now!", "UK English Male");
      responsiveVoice.speak("Nevermind!", "UK English Male");
    }
    if (timeLeft == 66) {
      music.play();
    }
    if (relapse) {
      if (timeLeft == 40) {
        music.pause();
        music.currentTime = 0;
        responsiveVoice.speak("Issue resolved, sorry for the inconvience, we have added an extra twenty five seconds to the clock!", "UK English Male");
        returnMediumNewNew();
        showInput();
        timeLeft = 65;
        relapse = false;
      }
    }
    if (timeLeft <= 0) {
      clearInterval(timerCountdownEasy);
      mediumLevelTime();
    } else {
      $("#timerDisplay").text(timeLeft + " seconds left!");
    }
    if (mediumLevelSentencesTyped) {
      mediumlevelTyped();
      timeLeft += 1;
      clearInterval(timerCountdownMedium);
    }
    timeLeft -= 1;
  }, 1000);
}

//timerCountdownHard
function timerCountdownHard() {
  let timeLeft = 120;
  let timerCountdown = setInterval(function() {
    if (timeLeft == 50) {
      responsiveVoice.speak("50 Seconds remain!", "UK English Male");
    }
    if (timeLeft <= 0) {
      clearInterval(timerCountdownEasy);
      hardLevelTime();
    } else {
      $("#timerDisplay").text(timeLeft + " seconds left!");
    }
    if (hardLevelSentencesTyped) {
      timeLeft += 1;
      clearInterval(timerCountdownHard);
    }
    timeLeft -= 1;
  }, 1000);
}

//shows and focuses on text field
function showInput() {
  $(function() {
    $('#t-box').show().focus();
  });
}

//dialog box for easy level out of time
function easyLevelTime() {
  $(function() {
    $("#fail_easy_dialog").dialog({
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

//dialog box for easy level out of time
function mediumLevelTime() {
  $(function() {
    $("#fail_medium_dialog").dialog({
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
function easylevelTyped() {
  $(function() {
    $("#complete_easy_dialog").dialog({
      modal: true,
      buttons: {
        Menu: function() {
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

//return to normal medium sentences
function returnMediumNewNew() {
  let random = Math.floor(Math.random() * randomSentencesMediumNewNew.length); //chooses a random string from the randomSentencesEasy array

  //creates the random sentences from the div
  let mediumIndexNewNew = 0;
  const RANDOM_SENTENCES_DIV = $(`#random-sentences-medium-new-new`)[mediumIndexNewNew];

  //splits the characters into single characters including spacing, then placed into an array
  let singularCharactersMediumNewNew = randomSentencesMediumNewNew[random].split("").map((character) => { //Places the randomized string into an array and then maps over each array using an empty string
    let span = $('<span/>'); //creates the <span>
    $(span).text(character);
    $(RANDOM_SENTENCES_DIV).append(span); //give each character a <span>
    return span; //returns the value of span
  });

  //highlights the first character in the array of singleCharacters
  let currentIndexNewNew = 0;
  let initialCharacterMediumNewNew = singularCharactersMediumNewNew[currentIndexNewNew];
  $(initialCharacterMediumNewNew).addClass('start'); //adds class 'start' to initialCharacter in the array
  //if keypress is down
  $(document).on('keypress', function({
    key
  }) {
    if (key === $(initialCharacterMediumNewNew).text()) {
      //hides the text every 3 seconds
      $("#random-sentences-medium-new-new").animate({
        left: "+=50",
        height: "toggle"
      }, 3000, function() {});
      $(initialCharacterMediumNewNew).removeClass('start'); //removes the class of 'start' if initialCharacter is the same as the character being typed
      $(initialCharacterMediumNewNew).addClass('correct'); //add correct class to the correct character typed
      initialCharacterMediumNewNew = singularCharactersMediumNewNew[currentIndexNewNew += 1]; //adds 1 onto the array, moves on to the next character in the array //for loop didn't work here
      $(initialCharacterMediumNewNew).addClass('start'); //adds the class 'start'
    }
    //if key isn't the same as initialCharacter then add class 'incorrect' to current index
    else if (key !== $(initialCharacterMediumNewNew).text()) {
      $(initialCharacterMediumNewNew).addClass('incorrect');
    }
    if (currentIndexNewNew === singularCharactersMediumNewNew.length) {
      mediumLevelSentencesTyped = true;
    }
    if (mediumLevelSentencesTyped) {
      mediumlevelTyped();
    }
  });
}
//return to normal medium sentences
function returnMediumTextNew() {
  let random = Math.floor(Math.random() * randomSentencesMediumNew.length);

  let mediumIndexNew = 0;
  const RANDOM_SENTENCES_DIV = $(`#random-sentences-medium-new`)[mediumIndexNew];

  let singularCharactersMediumNew = randomSentencesMediumNew[random].split("").map((character) => {
    let span = $('<span/>');
    $(span).text(character);
    $(RANDOM_SENTENCES_DIV).append(span);
    return span;
  });

  let currentIndexNew = 0;
  let initialCharacterMediumNew = singularCharactersMediumNew[currentIndexNew];
  $(initialCharacterMediumNew).addClass('start');

  $(document).on('keypress', function({
    key
  }) {
    if (key === $(initialCharacterMediumNew).text()) {
      //hides the text every 3 seconds
      $("#random-sentences-medium-new").animate({
        left: "+=50",
        height: "toggle"
      }, 2000, function() {});
      //changes font size if key if right
      let fontSize = parseInt($('#random-sentences-medium-new').css("font-size"));
      fontSize = fontSize - .0001 + "px";
      $('#random-sentences-medium-new').css({
        'font-size': fontSize
      });
      $(initialCharacterMediumNew).removeClass('start');
      $(initialCharacterMediumNew).addClass('correct');
      initialCharacterMediumNew = singularCharactersMediumNew[currentIndexNew += 1];
      $(initialCharacterMediumNew).addClass('start');
    } else if (key !== $(initialCharacterMediumNew).text()) {
      $(initialCharacterMediumNew).addClass('incorrect');
    }
    if (currentIndexNew === singularCharactersMediumNew.length) {
      mediumLevelSentencesTyped = true;
    }
    if (mediumLevelSentencesTyped) {
      mediumlevelTyped();
    }
  });
}

//prevents the player from pressing 'enter' to refresh the page
$(window).keydown(function(key) {
  if (key.keyCode === 13) {
    event.preventDefault();
    return false;
  }
});
