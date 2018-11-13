amberAmount = 0;
chainLevel = 0;
keyForged = {};

function resetKeys() {
  keyForged = {
    'red': false,
    'blue': false,
    'yellow': false,
  }
}

function startOver() {
  var sure = confirm("Are you sure you want to reset?");

  if(sure) {
    amberAmount = 0;
    chainLevel = 0;
    resetKeys();

    amberRender();
    forgeRender();

    ga('send', { hitType: 'event', eventCategory: 'Game', eventAction: 'restart', eventLabel: 'Usage' });
  }
}


window.onload = function() {
  console.log("On load");
  ga('send', { hitType: 'event', eventCategory: 'Game', eventAction: 'new game', eventLabel: 'Usage' });
  var loadingPageOverlay = document.getElementById("loadingPageOverlay");
  loadingPageOverlay.style.visibility = 'hidden';

  var restartButton = document.getElementById("restart-button");
  restartButton.addEventListener("click", startOver, false);

  var rulesButton = document.getElementById("rules-link");
  rulesButton.addEventListener("click", function() {
    ga('send', { hitType: 'event', eventCategory: 'Game', eventAction: 'rules', eventLabel: 'Usage' });
  }, false);
}
