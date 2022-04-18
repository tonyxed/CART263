$(document).ready(difficultyMediumDialog);

function difficultyMediumDialog() {
  $(function() {
    $("#medium_dialog").dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Medium": function() {
          timerMediumStart();
          $(this).dialog("close");
          responsiveVoice.speak("Medium level selected", "UK English Male");
          responsiveVoice.speak("This level has superb coding, you will see!", "UK English Male");
          responsiveVoice.speak("3", "UK English Male");
          responsiveVoice.speak("2", "UK English Male");
          responsiveVoice.speak("1", "UK English Male");
        },
      }
    });
  });
}

//medium level function
function btnMediumPress() {
  timerCountdownMedium();
  if (mediumLevelSentencesShow) {
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
          left: "+=100",
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
    });
  }
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
      returnMediumTextTwo();
      showInput();
    }
    if (timeLeft == 70) {
      $('#random-sentences-medium-two').empty();
      $('#random-sentences-medium-two').remove();
      $('#random-sentences-medium-two').hide();
      responsiveVoice.speak("They seem to have broken it entirely, hold on please!", "UK English Male");
    }
    if (timeLeft == 67) {
      music.play();
    }
    if (timeLeft == 65) {
      music.pause();
      music.currentTime = 0;
      responsiveVoice.speak("Working now!", "UK English Male");
      responsiveVoice.speak("Nevermind!", "UK English Male");
    }
    if (timeLeft == 63) {
      music.play();
    }
    if (relapse) {
      if (timeLeft == 40) {
        music.pause();
        music.currentTime = 0;
        responsiveVoice.speak("Issue resolved, sorry for the inconvience, we have added an extra twenty three seconds to the clock!", "UK English Male");
        returnMediumThree();
        showInput();
        timeLeft = 62;
        relapse = false;
      }
    }
    if (timeLeft <= 0) {
      clearInterval(timerCountdownMedium);
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

//dialog box for medium level out of time
function mediumLevelTime() {
  $(function() {
    $("#fail_medium_dialog").dialog({
      modal: true,
      buttons: {
        Restart: function() {
          self.location = "mediumLevel.html";
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
        Hard: function() {
          location.reload();
          self.location = "hardLevel.html";
          $(this).dialog("close");
        }
      }
    });
  });
}

//return to normal medium sentences
function returnMediumTextTwo() {
  let random = Math.floor(Math.random() * randomSentencesMediumTwo.length);

  let mediumIndexTwo = 0;
  const RANDOM_SENTENCES_DIV = $(`#random-sentences-medium-two`)[mediumIndexTwo];

  let singularCharactersMediumTwo = randomSentencesMediumTwo[random].split("").map((character) => {
    let span = $('<span/>');
    $(span).text(character);
    $(RANDOM_SENTENCES_DIV).append(span);
    return span;
  });

  let currentIndexTwo = 0;
  let initialCharacterMediumTwo = singularCharactersMediumTwo[currentIndexTwo];
  $(initialCharacterMediumTwo).addClass('start');

  $(document).on('keypress', function({
    key
  }) {
    if (key === $(initialCharacterMediumTwo).text()) {
      //hides the text every 3 seconds
      $("#random-sentences-medium-two").animate({
        left: "+=50",
        height: "toggle"
      }, 2000, function() {});
      //changes font size if key if right
      let fontSize = parseInt($('#random-sentences-medium-two').css("font-size"));
      fontSize = fontSize - .0001 + "px";
      $('#random-sentences-medium-two').css({
        'font-size': fontSize
      });
      $(initialCharacterMediumTwo).removeClass('start');
      $(initialCharacterMediumTwo).addClass('correct');
      initialCharacterMediumTwo = singularCharactersMediumTwo[currentIndexTwo += 1];
      $(initialCharacterMediumTwo).addClass('start');
    } else if (key !== $(initialCharacterMediumTwo).text()) {
      $(initialCharacterMediumTwo).addClass('incorrect');
    }
    if (currentIndexTwo === singularCharactersMediumTwo.length) {
      mediumLevelSentencesTyped = true;
    }
  });
}

//return to normal medium sentences
function returnMediumThree() {
  let random = Math.floor(Math.random() * randomSentencesMediumThree.length); //chooses a random string from the randomSentencesEasy array

  //creates the random sentences from the div
  let mediumIndexThree = 0;
  const RANDOM_SENTENCES_DIV = $(`#random-sentences-medium-three`)[mediumIndexThree];

  //splits the characters into single characters including spacing, then placed into an array
  let singularCharactersMediumThree = randomSentencesMediumThree[random].split("").map((character) => { //Places the randomized string into an array and then maps over each array using an empty string
    let span = $('<span/>'); //creates the <span>
    $(span).text(character);
    $(RANDOM_SENTENCES_DIV).append(span); //give each character a <span>
    return span; //returns the value of span
  });

  //highlights the first character in the array of singleCharacters
  let currentIndexThree = 0;
  let initialCharacterMediumThree = singularCharactersMediumThree[currentIndexThree];
  $(initialCharacterMediumThree).addClass('start'); //adds class 'start' to initialCharacter in the array
  //if keypress is down
  $(document).on('keypress', function({
    key
  }) {
    if (key === $(initialCharacterMediumThree).text()) {
      $("#random-sentences-medium-three").animate({
        left: "+=100",
        height: "toggle"
      }, 2000, function() {});
      $(initialCharacterMediumThree).removeClass('start'); //removes the class of 'start' if initialCharacter is the same as the character being typed
      $(initialCharacterMediumThree).addClass('correct'); //add correct class to the correct character typed
      initialCharacterMediumThree = singularCharactersMediumThree[currentIndexThree += 1]; //adds 1 onto the array, moves on to the next character in the array //for loop didn't work here
      $(initialCharacterMediumThree).addClass('start'); //adds the class 'start'
    }
    //if key isn't the same as initialCharacter then add class 'incorrect' to current index
    else if (key !== $(initialCharacterMediumThree).text()) {
      $(initialCharacterMediumThree).addClass('incorrect');
    }
    if (currentIndexThree === singularCharactersMediumThree.length) {
      mediumLevelSentencesTyped = true;
    }
    if (mediumLevelSentencesTyped) {
      mediumlevelTyped();
    }
  });
}
