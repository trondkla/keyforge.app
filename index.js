amberAmount = 0;
chainAmount = 0;
chainMinusCards = 0;
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
    chainAmount = 0;
    chainMinusCards = 0;
    resetKeys();

    amberRender();
    forgeRender();
    chainRender();

    gtag('event', 'restart', {
        'event_category': 'Game',
        'event_label': 'Usage',
      });
  }
}


window.onload = function() {
  console.log("On load");
  gtag('event', 'new game', {
      'event_category': 'Game',
      'event_label': 'Usage',
    });
  var loadingPageOverlay = document.getElementById("loadingPageOverlay");
  loadingPageOverlay.style.visibility = 'hidden';

  var restartButton = document.getElementById("restart-button");
  restartButton.addEventListener("click", startOver, false);

  var rulesButton = document.getElementById("rules-link");
  rulesButton.addEventListener("click", function() {
    gtag('event', 'rules', {
        'event_category': 'Game',
        'event_label': 'Usage',
      });
  }, false);
}
