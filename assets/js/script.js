    // Create constant variable that will house the cards so we don't have to put them in HTML//
    // could also use querySelector here //
    const board = document.getElementById("board");
    
    
    // Card info list >> array to call in later function //
    let animalCards = () => [
        {name: "starfish", img: "/assets/images/starfish-1.png"},
        {name: "starfish", img: "/assets/images/starfish-1.png"},
        {name: "dolphin", img: "/assets/images/dolphin-2.png"},
        {name: "dolphin", img: "/assets/images/dolphin-2.png"},
        {name: "octopus", img: "/assets/images/octopus-3.png"},
        {name: "octopus", img: "/assets/images/octopus-3.png"},
        {name: "crab", img: "/assets/images/crab.jpeg"},
        {name: "crab", img: "/assets/images/crab.jpeg"},
        {name: "stingray", img: "/assets/images/stingray-5.png"},
        {name: "stingray", img: "/assets/images/stingray-5.png"},
        {name: "turtle", img: "/assets/images/turtle.jpeg"},
        {name: "turtle", img: "/assets/images/turtle.jpeg"},
        {name: "whale", img: "/assets/images/whale.webp"},
        {name: "whale", img: "/assets/images/whale.webp"},
        {name: "seahorse", img: "/assets/images/seahorse.jpeg"},
        {name: "seahorse", img: "/assets/images/seahorse.jpeg"},
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

// Generate board game //
let gameboard = () => {
    let cardInfo = randomize();

    cardInfo.forEach(item => {
        // Generate HTML card sides and their id names //
let card = document.createElement("div");
let cardFront = document.createElement("img");
let cardBack = document.createElement("img");

card.classList = "card";
cardFront.classList = "card-front";
cardBack.classList = "card-back";

// Put images onto card faces //
cardFront.src = item.img;

// Put cards in div w id='board' //
board.appendChild(card);
card.appendChild(cardFront);
card.appendChild(cardBack);
card.addEventListener('click', (event) => {
card.classList.toggle('toggle');
});
});

};

gameboard();



// RESET GAME //

// HOW TO PLAY >> included pop up instructions //

    