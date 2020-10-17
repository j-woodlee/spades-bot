import Card from Card.js;


export default class SpadesBot { // one instance of this per game

    // four main "styles" of play:
    // 1: get as many tricks as possible during the hand
    // 2: get zero tricks possible during the hand (nil)
    // 3: cover partner - play low cards when other team is going to take it, play high cards when your partner could potentially take it
    // 4: prevent other team from going nil

    constructor() {
        this.deck =  // this is necessary to reference
        [
            new Card('S',2), new Card('S',3), new Card('S',4), new Card('S',5),
            new Card('S',6), new Card('S',7), new Card('S',8), new Card('S',9),
            new Card('S',10), new Card('S',11), new Card('S',12), new Card('S',13),
            new Card('S',14), new Card('S',15),new Card('S',16), 

            new Card('H',2), new Card('H',3), new Card('H',4), new Card('H',5), 
            new Card('H',6), new Card('H',7), new Card('H',8), new Card('H',9), 
            new Card('H',10), new Card('H',11), new Card('H',12),new Card('H',13),
            new Card('H',14),

            new Card('D',2), new Card('D',3), new Card('D',4), new Card('D',5), new Card('D',6), 
            new Card('D',7), new Card('D',8), new Card('D',9), new Card('D',10), 
            new Card('D',11), new Card('D',12), new Card('D',13), new Card('D',14),

            new Card('C',2), new Card('C',3), new Card('C',4), new Card('C',5), new Card('C',6), 
            new Card('C',7), new Card('C',8), new Card('C',9), new Card('C',10), 
            new Card('C',11), new Card('C',12),new Card('C',13), new Card('C',14)
        ];
        this.currentCards = [];
        this.cardsPlayed = [];
        this.bids = [null, null, null, null]; // array of four.  0 is bot, 1 is left player, 2 is teammate, 3 is right player. a null value indicates no bid has happened yet
        this.myBid = null;
    }

    /* 

    cardsPlayed: Array of 52 cards, fills up as the hand goes on
    table: array of 3, position zero is lead, the rest is sequential
    myLead: true or false
    spadesBroken: true or false
    */
    takeTurn = (cardsPlayed, table, myLead, spadesBroken) => { // returns a card form 'myCards'

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

        // get all possible moves within the rules of the game, table[0] is lead card
        let possibleMoves = this.calculatePossibleMoves(myLead, table[0], spadesBroken);

         // calculate highest of each suit
        let highestOfEachSuit = this.getHighestOfEachSuit(cardsPlayed);

        if (bids[0] > 0 && bids[1] > 0 && bids[2] > 0 && bids[3] > 0) { // no one is going nil, take turn greedily
            return takeTurnGreedily(this.myCards, cardsPlayed, table, highestOfEachSuit);
        }

        // someone is going nil
        
    }

    calculatePossibleMoves = (myLead, leadCard, spadesBroken) => {

        let possibleMoves = [];

        if (!mylead) {
            for (let i = 0; i < myCards.length; i++) { // only possible moves are the cards of the lead suit
                if (myCards[i].suit == leadCard.suit) {
                    possibleMoves.add(myCard[i]);
                }
            }

            if (possibleMoves.length == 0) { // out of the suit
                possibleMoves = myCards;
            }

            if (!spadesBroken) { //remove all spades from possible moves    
                for (let i = 0; i < possibleMoves; i++) {
                    if (possibleMoves[i].suit == 'S') {
                        possibleMoves.remove(possibleMoves[i]);
                    }
                }
            }
        } else if (myLead) {
            possibleMoves = myCards;

            if (!spadesBroken) { //remove all spades from possible moves    
                for (let i = 0; i < possibleMoves; i++) {
    
                }
            }
        }

        return possibleMoves;
    }

    takeTurnGreedily = (myCards, cardsPlayed, table, highestOfEachSuit) => {
        
    }

    // return highest card of each suit remaining in the game, 0=H, 1=D, 2=C, 3=S
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

    calculateBid = (myHand) => {
        let bid = 0;

        for (let i = 0; i < myHand.length; i++) {

        }
        return bid;
    }
}