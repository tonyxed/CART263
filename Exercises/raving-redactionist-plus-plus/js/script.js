/**
Raving Redactionist-Plus-Plus
Anthony Calderone

*/

"use strict";

//on click function of top-secret spans
$(`.top-secret`).on(`mouseover`, redact);

//sets the interval to 5 seconds
setInterval(revelation, 500);

//selects all redacted class's
function revelation(){
  $(`.redacted`).each(attemptReveal); //.each is for the array like object, redacted class in the index.html
}

//attempts to reveal text
function attemptReveal(){
let r = Math.random();
if (r < .1){
  $(this).removeClass(`redacted`);
  $(this).addClass(`revealed`);
}
  }

//when clicked on the spans
function redact(event){
$(this).removeClass(`revealed`);
$(this).addClass(`redacted`);
}
