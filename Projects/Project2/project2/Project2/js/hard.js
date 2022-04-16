//hard level function
function btnHardPress() {
  timerCountdownHard();
  if (hardLevelSentencesShow) {
    objectGuess();
    setTimeout(function() {
      randomGuess();
    }, 3000);
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

//timerCountdownHard
function timerCountdownHard() {
  let timeLeft = 90;
  let timerCountdown = setInterval(function() {
    if (timeLeft == 20) {
      responsiveVoice.speak("20 Seconds remain!", "UK English Male");
    }
    if (timeLeft <= 0) {
      clearInterval(timerCountdownHard);
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

//setup for annyang
function objectGuess() {
  if (annyang) {
    let commands = {
      '*object': guessObject
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}

//storing the array into currentObject variable
function randomGuess() {
  currentObject = object[Math.floor(Math.random() * object.length)];
  // $(`#object`).text(currentObject);
  responsiveVoice.speak(currentObject);
}
//checks to see if the guess is right or wrong and acts accordingly
let correct = 0;
function guessObject(object) {
  currentAnswer = object.toLowerCase();
  if (currentAnswer === currentObject) {
    $(`#object`).css('color', "#00ff44");
    correct+=1;
    $(`#correct`).text("Correct:" + correct);
    // player has to say 5 correct words, in order to complete the level(needs to press a button for it to happen) + type all of the text
  }
  if (currentAnswer !== currentObject) {
    $(`#object`).css('color', "red");
  }
}

//dialog box for easy level out of time
function hardLevelTime() {
  $(function() {
    $("#fail_hard_dialog").dialog({
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
