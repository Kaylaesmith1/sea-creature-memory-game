    // Create constant variable that will house the cards so we don't have to put them in HTML//
    // could also use querySelector here //
    const container = document.getElementById("container");
    
    
    // Card info list >> array to call in later function //
    let animalCards = () => [
        {name: "starfish", img: "/assets/images/starfish-1.png"},
        {name: "starfish", img: "/assets/images/starfish-1.png"},
        {name: "dolphin", img: "/assets/images/dolphin-2.png"},
        {name: "dolphin", img: "/assets/images/dolphin-2.png"},
        {name: "octopus", img: "/assets/images/octopus-3.png"},
        {name: "octopus", img: "/assets/images/octopus-3.png"},
        {name: "crab", img: "/assets/images/crab-4.png"},
        {name: "crab", img: "/assets/images/crab-4.png"},
        {name: "stingray", img: "/assets/images/stingray.png"},
        {name: "stingray", img: "/assets/images/stingray.png"},
        {name: "jellyfish", img: "/assets/images/jellyfish-6.png"},
        {name: "jellyfish", img: "/assets/images/jellyfish-6.png"},
        {name: "whale", img: "/assets/images/whale-7.png"},
        {name: "whale", img: "/assets/images/whale-7.png"},
        {name: "seahorse", img: "/assets/images/seahorse-8.png"},
        {name: "seahorse", img: "/assets/images/seahorse-8.png"},
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

// Put cards in div container //
container.appendChild(card);
card.appendChild(cardFront);
card.appendChild(cardBack);
    });

};

gameboard();



// RESET GAME //

// HOW TO PLAY >> included pop up instructions //

    