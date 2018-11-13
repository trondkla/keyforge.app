function calculateMinusCards() {
    if (chainAmount === 0) {
        chainMinusCards = 0;
    }
    else if(chainAmount >= 1 && chainAmount < 7) {
        chainMinusCards = -1;
    }
    else if(chainAmount >= 7 && chainAmount < 12) {
        chainMinusCards = -2;
    }
    else if(chainAmount >= 13 && chainAmount < 18) {
        chainMinusCards = -3;
    }
    else if(chainAmount >= 19) {
        chainMinusCards = -4;
    }
}

function chainRender() {
    calculateMinusCards();

    console.log("Update chain amount", chainAmount, 'minus cards: ' + chainMinusCards);
    var chainEl = document.getElementById("chain-amount");
    chainEl.innerHTML = chainAmount;

    var cardsEl = document.getElementById("chain-minus-cards-amount");
    cardsEl.innerHTML = chainMinusCards;

    var cardsContainerEl = document.getElementById("chain-minus-cards");
    cardsContainerEl.className = "card-level-color-" + chainMinusCards;


}

function increaseChain() {
    chainAmount++;
    chainRender();
}

function decreaseChain() {
    chainAmount--;
    if (chainAmount < 0) {
        chainAmount = 0;
    }
    chainRender();
}

var plusButtonEl = document.getElementById("chain-plus-button");
plusButtonEl.addEventListener("click", increaseChain, false);


var minusButtonEl = document.getElementById("chain-minus-button");
minusButtonEl.addEventListener("click", decreaseChain, false);


chainRender();
