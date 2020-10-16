import Game from "./Game.js";
import SpadesBot from "./SpadesBot.js"



let game1 = new Game();

shuffle(game1.deck)



let table = [null, null, null, null];

let bids = [null, null, null, null];


let teammateCards = deck.slice(0,13); // cards 0-12

let myCards = deck.slice(13,26); // cards 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13

let enemy1Cards = deck.slice(26,39); // cards 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26

let enemy2Cards = deck.slice(39, 52); // cards 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39



console.log("teammateCards: " + teammateCards);

console.log("myCards: " + myCards);

console.log("enemy1Cards" + enemy1Cards);

console.log("enemy2Cards" + enemy2Cards);


let bids = [];





// test getHighestOfEachSuit

console.log("getHighestOfEachSuit([]) == " + getHighestOfEachSuit([]));

console.log("getHighestOfEachSuit([D14, D3, D5, D6])", getHighestOfEachSuit([new Card('D',14), new Card('D',3),new Card('D',5), new Card('D',6)]));