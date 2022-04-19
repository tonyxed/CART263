window.onload = function() { //on start up load btnGroup first
  $(document).ready(onStart);
  $('#t-box').hide(); //hides the text box until a level is choosen
}

//music dialog
function onStart() {
  //start dialog
  $(function() {
    $("#difficulty_dialog").dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Start": function() {
          timerEasyStart();
          $(this).dialog("close");
          responsiveVoice.speak("Easy level selected", "UK English Male");
          responsiveVoice.speak("This level is quite unchallenging, should be a breeze.", "UK English Male");
          responsiveVoice.speak("Get ready to type:", "UK English Male");
          responsiveVoice.speak("3", "UK English Male");
          responsiveVoice.speak("2", "UK English Male");
          responsiveVoice.speak("1", "UK English Male");
        },
      }
    });
  });
  //music dialog
  $(function() {
    $("#music_dialog").dialog({
      resizable: false,
      height: 300,
      width: 400,
      modal: true,
      buttons: {
        "Chill": function() {
          chillMusic.play();
          chillMusic.volume = .060;
          $(this).dialog("close");
        },
        "Country": function() {
          countryMusic.play();
          countryMusic.volume = .030;
          $(this).dialog("close");
        },
        "Lofi": function() {
          lofiMusic.play();
          lofiMusic.volume = .30;
          $(this).dialog("close");
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

//timerCountdownEasy
function timerCountdownEasy() {
  let timeLeft = 50;
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

//dialog box for easy level out of time
function easyLevelTime() {
  $(function() {
    $("#fail_easy_dialog").dialog({
      modal: true,
      buttons: {
        Restart: function() {
          self.location = "index.html";
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
        Next: function() {
          self.location = "mediumLevel.html";
          $(this).dialog("close");
        }
      }
    });
  });
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
