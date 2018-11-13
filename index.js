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


window.onload = function() {
  console.log("On load");
  var loadingPageOverlay = document.getElementById("loadingPageOverlay");
  loadingPageOverlay.style.visibility = 'hidden';

  var restartButton = document.getElementById("restart-button");
  restartButton.addEventListener("click", startOver, false);
}
