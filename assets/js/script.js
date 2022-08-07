    // Create constant variable that will house the cards so we don't have to put them in HTML//
    // could also use querySelector here //
    const board = document.getElementById("board");
    
    
    // Card info list >> array to call in later function //
    let animalCards = () => [
        {name: "starfish", img: "assets/images/starfish.png"},
        {name: "starfish", img: "assets/images/starfish.png"},
        {name: "dolphin", img: "assets/images/dolphin.png"},
        {name: "dolphin", img: "assets/images/dolphin.png"},
        {name: "octopus", img: "assets/images/octopus.png"},
        {name: "octopus", img: "assets/images/octopus.png"},
        {name: "crab", img: "assets/images/crab.jpeg"},
        {name: "crab", img: "assets/images/crab.jpeg"},
        {name: "stingray", img: "assets/images/stingray.png"},
        {name: "stingray", img: "assets/images/stingray.png"},
        {name: "turtle", img: "assets/images/turtle.jpeg"},
        {name: "turtle", img: "assets/images/turtle.jpeg"},
        {name: "whale", img: "assets/images/whale.webp"},
        {name: "whale", img: "assets/images/whale.webp"},
        {name: "seahorse", img: "assets/images/seahorse.jpeg"},
        {name: "seahorse", img: "assets/images/seahorse.jpeg"},
        //include 4 more cards for 'hard level'? //
];


// Randomize cards on the board //
let randomize = () => {
    let cardInfo = animalCards () 
        //randomize the array from animalCards variable: //
        cardInfo.sort(()=> Math.random()-0.5);
    return cardInfo;
    };

    randomize();

// CREATE BOARD //
let gameboard = () => {
    let cardInfo = randomize();

    cardInfo.forEach((item) => {
        // Generate HTML card sides and their id names //
let card = document.createElement("div");
let cardFront = document.createElement("img");
let cardBack = document.createElement("img");
cardBack.setAttribute('src', 'assets/images/card-back-reef.png');

card.classList = "card";
cardFront.classList = "card-front";
cardBack.classList = "card-back";

// Put images onto card faces //
cardFront.src = item.img;
card.setAttribute("name", item.name);


// Put cards in div w id='board' //
board.appendChild(card);
card.appendChild(cardFront);
card.appendChild(cardBack);
card.addEventListener('click', (event) => {
card.classList.toggle("toggle");
checkMatch(event);
});
});
};

// CHECK MATCH //
let checkMatch = (event) => {
    let cardClicked = event.target;
    cardClicked.classList.add("flipped");
    let cardFlipped = document.querySelectorAll('.flipped');

    if (cardFlipped.length === 2) {
        if (cardFlipped[0].getAttribute("name") === cardFlipped[1].getAttribute("name")

    ) { 
        console.log('match');
        cardFlipped.forEach((card) => {
            card.classList.remove("flipped");
            card.style.pointerEvents = 'none';
        });
    } else {
    console.log('no match');
    cardFlipped.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggle"), 1000);
    });
    }
    }
    };


// !!OJO!! function not working yet -- RESET GAME when click reset button //
// let reset = () => {
//     let cardInfo = randomize();
//     let card = document.querySelectorAll(".card");
//     let cardFront = document.querySelectorAll(".card-front");

//     cardInfo.forEach((item, index) => {
//         card[index].classList.remove("toggle");
//     });
// };

gameboard();

// HOW TO PLAY >> included pop up instructions //

    