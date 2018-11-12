function forgeRender() {

  renderKey("red", keysForged >= 1);
  renderKey("blue", keysForged >= 2);
  renderKey("yellow", keysForged >= 3);

  if(keysForged >= 3) {
    alert("You won!");
    keysForged = 3;
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

function forgeKey() {
  console.log("Forge key");
  keysForged++;
  forgeRender();
}

function deforgeKey() {
  console.log("Deforge key");
  keysForged--;
  if (keysForged < 0) {
    keysForged = 0;
  }
  forgeRender();
}

forgeRender();
