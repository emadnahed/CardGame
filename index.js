
// 1. Create two variables, firstCard and secondCard.
// Set their values a to a random number between 2-11
let firstCard = 6
let secondCard = 90

// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard

// Set the conditions to check the game status.
if (sum < 21) {
    console.log("Do you want to draw a new card?")}
else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!")}
else {
    console.log("You're out of the game!")}