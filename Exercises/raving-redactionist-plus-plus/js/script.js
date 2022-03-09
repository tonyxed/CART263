/**
Raving Redactionist-Plus-Plus
Hide the messages by hovering over them, or toggling them.
Anthony Calderone

*/

"use strict";

//on click function of top-secret spans
$(`.top-secret`).on(`mouseover`, redact);

//button click to toggle messages
$("#toggle").on(`click`, buttonClick);

//button to see how many messages are revealed
$("#totalShown").on(`click`, total);

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

//toggles the messages from being seen or not
function buttonClick(event){
  $(`.top-secret`).animate({
    height: 'toggle'
  });
}

//calculates how many messages are revealed
function total(event){
  alert($(`.revealed`).length);
}
