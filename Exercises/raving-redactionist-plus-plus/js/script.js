/**
Raving Redactionist-Plus-Plus
Hover over the secret messages to hide them from sight.
Anthony Calderone

*/

"use strict";

//on click function of top-secret spans
$(`.top-secret`).on(`mouseover`, redact);
//button click to toggle messages
$("button").on(`click`, buttonClick);

//sets the interval to 5 seconds
setInterval(revelation, 500);

//selects all redacted
function revelation() {
  $(`.redacted`).each(attemptReveal); //.each is for the array like object, redacted class in the index.html
}

//attempts to reveal text
function attemptReveal() {
  let r = Math.random();
  if (r < .1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}

//when clicked on the spans
function redact(event) {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}

function buttonClick(){
  $(`.top-secret`).animate({
    height: 'toggle'
  });
}
