keyForged = {
  'red': false,
  'blue': false,
  'yellow': false,
}

function forgeRender() {

  renderKey("red", keyForged["red"]);
  renderKey("blue", keyForged["blue"]);
  renderKey("yellow", keyForged["yellow"]);

  if(keyForged["blue"] && keyForged["red"] && keyForged["yellow"]) {
    alert("You won!");
    ga('send', { hitType: 'event', eventCategory: 'Game', eventAction: 'won', eventLabel: 'Usage' });
  }
}

function renderKey(color, active) {
  var keyEl = document.getElementById(color + "-key");

  if (active) {
    keyEl.src = "images/keys/" + color + ".png";
  } else {
    keyEl.src = "images/keys/grey.png";
  }
}

function forgeKey(color) {
  keyForged[color] = !keyForged[color];
  
  ga('send', { hitType: 'event', eventCategory: 'Key', eventAction: 'forge', eventLabel: 'Usage' });
  forgeRender();
  decreaseAmber(6);
}

var redKeyEl = document.getElementById('red-key');
redKeyEl.addEventListener("click", forgeKey.bind(null, 'red'), false);

var blueKeyEl = document.getElementById('blue-key');
blueKeyEl.addEventListener("click", forgeKey.bind(null, 'blue'), false);

var yellowKeyEl = document.getElementById('yellow-key');
yellowKeyEl.addEventListener("click", forgeKey.bind(null, 'yellow'), false);

// forgeRender();
