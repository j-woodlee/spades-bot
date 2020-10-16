import Card from Card.js;


export default class SpadesBot { // one instance of this per game

    // four main "styles" of play:
    // 1: get as many tricks as possible during the hand
    // 2: get zero tricks possible during the hand (nil)
    // 3: cover partner - play low cards when other team is going to take it, play high cards when your partner could potentially take it
    // 4: prevent other team from going nil

    constructor(myCards, bids) {
        this.myCards = myCards;
        this.cardsPlayed = [];
        this.bids = bids; // array of three.  0 is left player, 1 is teammate, 2 is right player. a null value indicates no bid has happened yet
        this.myBid = null;
    }

    /* 

    cardsPlayed: Array of 52 cards, fills up as the hand goes on

    */
    takeTurn = (cardsPlayed, table) => { // returns a card form 'myCards'

        // sort cards played by value
        cardsPlayed.sort((a,b) => {
            if (a.value < b.value) {
                return -1;
            }
            if ( a.value > b.value ) {
                return 1;
            }
            return 0;
        });



        let possibleMoves = this.calculatePossibleMoves(); // array of possible moves

        let highestOfEachSuit = getHighestOfEachSuit(cardsPlayed); // calculate highest of each suit each time

        if (bids[0] > 0 && bids[1] > 0 && bids[2] > 0 && bids[3] > 0) { // no one is going nil, take turn greedily
            return takeTurnGreedily(this.myCards, cardsPlayed, table, highestOfEachSuit);
        }

        // someone is going nil
        
    }

    calculatePossibleMoves = () => {

        let possibleMoves = [];

        for (let i = 0; i < myCards.length; i++) { // only possible moves are the cards of the lead suit
            if (myCards[i].suit == table[0].suit) {
                possibleMoves.add();
            }
        }

        if (possibleMoves.length == 0) { // out of the suit
            possibleMoves = myCards;
        }
        
        return possibleMoves;
    }

    takeTurnGreedily = (myCards, cardsPlayed, table, highestOfEachSuit) => {

    }

    getHighestOfEachSuit = (cardsPlayed) => {
        let highestOfEachSuit = [new Card('H', 14), new Card('D', 14), new Card('C', 14), new Card('S', 16)];

        // cards played is sorted
        for (let i = cardsPlayed.length; i >= 0; i--) {
            switch(cardsPlayed[i].suit) {
                case 'H':
                // code block
                    if (cardsPlayed[i].value == highestOfEachSuit[0]) {
                        highestOfEachSuit[0].value--;
                    }
                break;
                case 'D':
                    if (cardsPlayed[i].value == highestOfEachSuit[1]) {
                        highestOfEachSuit[1].value--;
                    }
                break;
                case 'C':
                    if (cardsPlayed[i].value == highestOfEachSuit[2]) {
                        highestOfEachSuit[2].value--;
                    }
                break;
                case 'S':
                    if (cardsPlayed[i].value == highestOfEachSuit[3]) {
                        highestOfEachSuit[3].value--;
                    }
                break;
                default:
                throw new Exception("Invalid suit in Card deck");
                return;
            }
        }

        return highestOfEachSuit;
    }

    // previousbids is an array of 3, to your left is pos 0, teammate is pos 1, to the right is pos 2
    calculateBid = (myHand, previousBids) => {
        let bid = 0;

        for (let i = 0; i < myHand.length; i++) {

        }
        return bid;
    }
}