//objective
//Make a prosthetic hand training game that uses arrow keys instead of prosthetic input.
//Phase 1) In level one, the user moves icon arrows to give different signals.
//Phase 2) level two, the user follows mouse, on screen. You see both displayed.
//Phase 3) Make level two function scorable.
//Phase 4) Make level two timed.
//Phase 5) Make a car or plane race game.

let iconHi5 = `<span class="material-symbols-outlined">
back_hand
</span>`;

let iconPoint = `<span class="material-symbols-outlined">
pan_tool_alt
</span>`;

let iconFist = '<img src="./assets/images/Closed.Fist.png" alt="hand in fist">';

//active at load
// when user inputs j, the finger changes to point.
addEventListener("keydown", (event) => {
  var keyName = event.key;
  console.log(keyName);
  if (keyName == "j") {
    Point();
  } 
  else if (keyName == " " ){
    Fist();
  }
  else Hi5();
  console.log(event);
  document.getElementById("userInput").value = "";
});

document.getElementById("myProsthesis").innerHTML = iconHi5;

//hand signal functions

function Hi5() {
  document.getElementById("myProsthesis").innerHTML = iconHi5;
}

function Point() {
  document.getElementById("myProsthesis").innerHTML = iconPoint;
}

function Fist() {
  document.getElementById("myProsthesis").innerHTML = iconFist;
}




function gestureSelector(event) {

}
