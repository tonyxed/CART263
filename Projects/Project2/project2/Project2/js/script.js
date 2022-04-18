/**
Racer; start!
Anthony Calderone

Use your exceptional typing capibilities to race your way to victory.
I felt that I needed to create something that can utilise a junction of what was introduced this semester, therefore, Racer; start! was born.
This project will incorporate JQUERY, CSS, and obviously JAVASCRIPT, with many different librabries that was seen throughout the semester.

Documentation // tutorials

E5 Haiku Generator
https://randomwordgenerator.com/sentence.php - random sentences
https://www.tutorialrepublic.com/codelab.php?topic=faq&file=javascript-get-the-value-of-text-input-field
https://www.w3schools.com/jsref/jsref_split.asp split the text, as in spliting the words in solo letters into an array
https://stackoverflow.com/questions/6484670/how-do-i-split-a-string-into-an-array-of-characters
https://stackoverflow.com/questions/895171/prevent-users-from-submitting-a-form-by-hitting-enter
https://api.jquery.com/
https://codepen.io/P1N2O/pen/pyBNzX - BACKGROUND GRADIENT
https://codepen.io/alvarotrigo/pen/bGrXmwM - text animation
*/

//levels
let easyLevelSentencesShow = false;
let easyLevelSentencesTyped = false;

let mediumLevelSentencesShow = false;
let mediumLevelSentencesTyped = false;

let hardLevelSentencesShow = false;
let hardLevelSentencesTyped = false;

//blink function variable
let blink = false;

//annyang arrays
let currentObject = ``;
let currentAnswer = ``;

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

//MEDIUM LEVEL SECOND VARIATION
let randomSentencesMediumTwo = [
  ".srab ydnac tluda naht erom gnihton erew srab rewop taht deppiuq nos siH .worg stnalp ym pleh ot gniyrt er'uoy em llet dna nedrag ym ni ssip t'noD .moorhtab eht ni tellab sih gnicitcarp syojne eH",
  ".ecneirepxe na gnivil saw eh ,cisum ot gninetsil t'nsaw eh tnemom taht tA .waj rewol ruoy fo esuaceb pu etib uoY .sdnah ruoy no dnats tsuj uoy fi dnatsdnah a od ot tluciffid t'nsi tI .tnasaelpnu tey gnitanicsaf niar dnuof eH .hsidar eht morf tub no devom dah ehs taht rettib t'nsaw eH",
  ".noitidepxe gnivid aes-peed a no snub nomannic gnirb syawlA .worg dluow tahw ees ot dnuow eht no taeh tup eH .nus eht fo ezag live eht morf retlehs kees ot aedi doog a syawla s'tI .no sthgil drazah sih htiw nwot dnuora gnivird dekil miJ .cilbup edam saw suriv yldaed wen a fo swen eht retfa stneitap htiw dedoolf saw retnec erac tnegru ehT .noitats ecaps eht yb wef hsif gniylF"
];

//MEDIUM LEVEL THIRD VARIATION
let randomSentencesMediumThree = [
  "He enjoys practicing his ballet in the bathroom. Don't piss in my garden and tell me you're trying to help my plants grow. His son quipped that power bars were nothing more than adult candy bars. Always bring cinnamon buns on a deep-sea diving expedition.",
  "He wasn't bitter that she had moved on but from the radish. He found rain fascinating yet unpleasant. It isn't difficult to do a handstand if you just stand on your hands. You bite up because of your lower jaw. At that moment he wasn't listening to music, he was living an experience.",
  "Flying fish few by the space station. The urgent care center was flooded with patients after the news of a new deadly virus was made public. Jim liked driving around town with his hazard lights on. It's always a good idea to seek shelter from the evil gaze of the sun. He put heat on the wound to see what would grow."
];

//HARD LEVEL
let randomSentencesHard = [
  "Every manager should be able to recite at least ten nursery rhymes backward. Being unacquainted with the chief raccoon was harming his prospects for promotion. Nothing is as cautiously cuddly as a pet porcupine. If you don't like toenails, you probably shouldn't look at your feet. The tree fell unexpectedly short. Henry couldn't decide if he was an auto mechanic or a priest.",
  "She saw no irony asking me to change but wanting me to accept her for who she is. The stench from the feedlot permeated the car despite having the air conditioning on recycled air. Every manager should be able to recite at least ten nursery rhymes backward.",
  "Peter found road kill an excellent way to save money on dinner. Nothing is as cautiously cuddly as a pet porcupine. Douglas figured the best way to succeed was to do the opposite of what he'd been doing all his life. The fish listened intently to what the frogs had to say. The thunderous roar of the jet overhead confirmed her worst fears. A quiet house is nice until you are ordered to stay in it for months."
];

//objects for annyang
let object = [
  "christmas",
  "acorn",
  "apple",
  "bag",
  "ball",
  "balloon",
  "banana",
  "bananas",
  "bandana",
  "bangle",
  "bar",
  "baseball",
  "basketball",
  "beaded",
  "bed",
  "beef",
  "bell",
  "belt",
  "blouse",
  "dryer",
  "duty",
  "book",
  "bookmark",
  "boom",
  "bottle",
  "buquet",
  "deadly",
  "avenue",
  "sunrise",
  "cinema",
  "parade",
  "energy",
  "supercalifragilisticexpialidocious",
  "flowers"
];

//shows and focuses on text field
function showInput() {
  $(function() {
    $('#t-box').show().focus();
  });
}

//prevents the player from pressing 'enter' to refresh the page
$(window).keydown(function(key) {
  if (key.keyCode === 13) {
    event.preventDefault();
    return false;
  }
});
