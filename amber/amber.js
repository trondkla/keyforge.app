function amberRender() {
  console.log("Update amber amount", amberAmount)
  var amountEl = document.getElementById("amber-amount");
  amountEl.innerHTML = amberAmount;
}


function increaseAmber() {
  amberAmount = amberAmount + 1;
  ga('send', { hitType: 'event', eventCategory: 'Amber', eventAction: 'increase', eventLabel: 'Usage' });

  if (amberAmount > 6) {
    amberAmount = 0;
    forgeKey();
  }
  amberRender();
}

function decreaseAmber() {
  amberAmount = amberAmount - 1;
  ga('send', { hitType: 'event', eventCategory: 'Amber', eventAction: 'decrease', eventLabel: 'Usage' });

  if (amberAmount <= 0 && keysForged > 0) {
    amberAmount = 6;
    deforgeKey();
  }
  if (amberAmount <= 0 && keysForged === 0) {
    amberAmount = 0;
  }
  amberRender();
}


var plusButtonEl = document.getElementById("amber-plus-button");
plusButtonEl.addEventListener("click", increaseAmber, false);


var minusButtonEl = document.getElementById("amber-minus-button");
minusButtonEl.addEventListener("click", decreaseAmber, false);

amberRender();
