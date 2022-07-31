const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cards = document.querySelectorAll(".cards");
let currentCard = 0;

function hideSelectedCard(){
    const selectedCard = document.querySelector(".selected");
    selectedCard.classList.remove("selected");
}

function selectCard(cardsIndex){
    cards[cardsIndex].classList.add("selected");
}

btnAvancar.addEventListener("click", function (){
    if (currentCard === cards.length -1) return;

    hideSelectedCard();

    currentCard++;

    selectCard(currentCard)
 
})

btnVoltar.addEventListener("click", function (){

    if (currentCard === 0) return;
    
    hideSelectedCard();

    currentCard--;
    
    selectCard(currentCard)

})