function amberRender() {
  console.log("Update amber amount", amberAmount)
  var amountEl = document.getElementById("amber-amount");
  amountEl.innerHTML = amberAmount;
}

function increaseAmber() {
  amberAmount = amberAmount + 1;
  ga('send', { hitType: 'event', eventCategory: 'Amber', eventAction: 'increase', eventLabel: 'Usage' });

  amberRender();
}

function decreaseAmber(amount) {
  if (!amount) amount = 1;
  amberAmount = amberAmount - amount;
  ga('send', { hitType: 'event', eventCategory: 'Amber', eventAction: 'decrease', eventLabel: 'Usage' });
  
  if (amberAmount <= 0) {
    amberAmount = 0;
  }
  amberRender();
}

var plusButtonEl = document.getElementById("amber-plus-button");
plusButtonEl.addEventListener("click", increaseAmber, false);


var minusButtonEl = document.getElementById("amber-minus-button");
minusButtonEl.addEventListener("click", decreaseAmber, false);

amberRender();
