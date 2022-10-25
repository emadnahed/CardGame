let firstCard = Math.floor((Math.random() * 10) + 1);
let secondCard = Math.floor((Math.random() * 10) + 1);

let cards = [firstCard,secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let clicks = 0;
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el")
let cardicon = document.getElementsByClassName("card")
let instructionsEl = document.getElementById("instructions-el")

instructionsEl.textContent = "Try your luck!"
console.log(instructionsEl)


function startGame() {
    renderGame()
}


function renderGame() {
    clicks++;
    cardEl.textContent = "Cards: " + cards;
    let x = 0 // the sum is initialed to 0
    for (let i = 0; i<sum.length; i += 1) {x += sum[i]}
    if (sum <= 20) {
        // console.log("Do you want to draw a new card?");
        message = "Do you want to draw a new card?";
        // messageEl.textContent = message;
        instructions = " Try with pressing a New Card"
        }

    else if (sum === 21) {
        // console.log("Wohoo, You've won the game");
        message = "You've won the game";
        hasBlackJack = true;
        instructions = " Win again by start over"
        }

    else {
        // console.log("You're out of the game.");
        message = "You're out of the game.";
        isAlive = false; 
        instructions = " Please start over"
        }
    
    messageEl.textContent = message;
    sumEl.textContent = "Sum of all card values: " + sum;
    instructionsEl.textContent = "Tip: " + instructions;
    
    if (sum>21) {
        
        document.getElementById("b1").disabled = true;
    }

    }
// messageEl.textContent += message;


function newCard() {
    if (clicks>0){
    console.log("Drawing a new card!")
    cardVariable = Math.trunc(Math.random()*9) + 1;
    cards.push(cardVariable)
    sum += cardVariable;
    renderGame();}
}


function rFresh() {
    location.reload()
}