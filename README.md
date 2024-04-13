
# Card Game

This is a simple card game where the user tries to get a sum of cards as close to 21 without going over. The game starts with two random cards and allows the user to draw a new card until they decide to stop or exceed the sum of 21.

**Note:** **This project is importantly made using vanilla Javascript.**

## Table of Contents

1. [Getting Started](#getting-started)
   * [Instructions](#instructions)
   * [Screenshot](#screenshot)
   * [Setup](#setup)
2. [Game Functionality](#game-functionality)
   * [Start Game](#start-game)
   * [Render Game](#render-game)
   * [New Card](#new-card)
   * [Reset Game](#reset-game)
3. [Glances on the Project](#glances-on-the-project)

## Getting Started

### Instructions

1. Click the "Start Game" button to begin the game.
2. The user will be given two random cards.
3. The sum of the cards will be displayed.
4. If the sum is less than 21, the user can choose to draw a new card.
5. If the sum is 21, the user wins the game.
6. If the sum exceeds 21, the user loses the game.
7. Click the "New Card" button to draw a new card.
8. Click the "Reset Game" button to reset the game.

### Screenshot

![image](https://github.com/emadnahed/CardGame/assets/81587039/9bbf41e3-f6e8-4763-a81c-25d446d39ba4)


### Setup

1. Open the project in a web browser.
2. Click the "Start Game" button to begin the game.

## Game Functionality

### Start Game

The "Start Game" button initializes the game, assigning two random cards and their sum to the user. The user is then prompted to draw a new card.

### Render Game

The "Render Game" function updates the game's state by displaying the current cards and sum. The function also determines whether the user can draw a new card or not. If the sum is greater than 21, the "New Card" button is disabled.

### New Card

The "New Card" button generates a new random card and adds it to the user's current cards. The function then updates the game's state (cards and sum) by using the "Render Game" function.

### Reset Game

The "Reset Game" button reloads the page to restart the game.


### Glances on the Project

This project implements a simple card game that is inspired by the popular game of Blackjack. The game provides the following glances:

* **Random Cards** : The game generates two random cards at the beginning of the game. The cards are randomly selected from a set of 10 possible card values (1-10).
* **Sum of Cards** : The sum of the user's cards is calculated and displayed in real-time. The user can see the current sum of their cards at all times.
* **Winning or Losing** : The game determines if the user has won (sum equals 21) or lost (sum exceeds 21) and displays the corresponding message.
* **Button States** : The game disables the "New Card" button if the user's sum exceeds 21. This prevents the user from drawing additional cards and going over the limit.
* **Game Reset** : The game allows the user to reset the game by reloading the page, making it easy to start a new game at any time.

These features create a simple and engaging card game that can be enjoyed by users of all ages. The project's implementation demonstrates the basics of JavaScript, DOM manipulation, and event handling.

I hope this additional information is helpful. If you have any further questions, please don't hesitate to ask.
