amberAmount = 0;
keysForged = 0;
chainLevel = 0;

function startOver() {
  var sure = confirm("Are you sure you want to reset?");

  if(sure) {
    amberAmount = 0;
    keysForged = 0;
    chainLevel = 0;

    amberRender();
    forgeRender();
  }
}


var restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", startOver, false);
