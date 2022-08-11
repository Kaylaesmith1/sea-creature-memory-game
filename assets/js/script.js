const board = document.getElementById("board");

/** ARRAY FOR GAMEBOARD LAYOUT */
let animalCards = () => [{
        name: "starfish",
        img: "assets/images/starfish.png"
    },
    {
        name: "starfish",
        img: "assets/images/starfish.png"
    },
    {
        name: "dolphin",
        img: "assets/images/dolphin.png"
    },
    {
        name: "dolphin",
        img: "assets/images/dolphin.png"
    },
    {
        name: "octopus",
        img: "assets/images/octopus.png"
    },
    {
        name: "octopus",
        img: "assets/images/octopus.png"
    },
    {
        name: "crab",
        img: "assets/images/crab.jpeg"
    },
    {
        name: "crab",
        img: "assets/images/crab.jpeg"
    },
    {
        name: "stingray",
        img: "assets/images/stingray.png"
    },
    {
        name: "stingray",
        img: "assets/images/stingray.png"
    },
    {
        name: "turtle",
        img: "assets/images/turtle.jpeg"
    },
    {
        name: "turtle",
        img: "assets/images/turtle.jpeg"
    },
    {
        name: "whale",
        img: "assets/images/whale.webp"
    },
    {
        name: "whale",
        img: "assets/images/whale.webp"
    },
    {
        name: "seahorse",
        img: "assets/images/seahorse.jpeg"
    },
    {
        name: "seahorse",
        img: "assets/images/seahorse.jpeg"
    },
];


/** RANDOMIZES CARDS ON BOARD */
let randomize = () => {
    let cardInfo = animalCards();
    //randomize the array from animalCards variable: //
    cardInfo.sort(() => Math.random() - 0.5);
    return cardInfo;
};

randomize();

/** CREATE BOARD */
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

/** CHECK MATCH */
let checkMatch = (event) => {
    let cardClicked = event.currentTarget;

    cardClicked.classList.add("flipped");
    let cardFlipped = document.querySelectorAll('.flipped');

    if (cardFlipped.length === 2) {

        if (cardFlipped[0].getAttribute("name") === cardFlipped[1].getAttribute("name")) {

            console.log('match');
            cardFlipped.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = 'none';
            });
        } else {
            console.log('no match');
            cardFlipped.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggle"), 900);
            });
        }
        addMove();
    }
};


/** RESET GAME */
const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
    moveContainer.innerHTML = 0;
    moves = 0;
    board.innerHTML = '';
    gameboard();
});

gameboard();

/** COUNT NUMBER OF MOVES */
let moveContainer = document.getElementById("moves");

let moves = 0;
moveContainer.innerHtml = 0;

function addMove() {
    moves++;
    moveContainer.innerHTML = moves;
}

/** BENEFITS OF GAME - homepage overlay */

/** CLOSE instructions */
const readyButton = document.querySelector(".ready");
let ready = document.getElementsByClassName("benefits-card");

readyButton.addEventListener('click', hideBenefits);

function hideBenefits() {
    ready[0].style.display = "none";
}


/** HOW TO PLAY, pop-up OPEN instructions */
const rulesButton = document.querySelector(".rules");
let rules = document.getElementsByClassName("rules-card");

rulesButton.addEventListener('click', showRules);

function showRules() {
    rules[0].style.display = "block";
}

/** CLOSE instructions */
const playButton = document.querySelector(".play-button");
rules = document.getElementsByClassName("rules-card");

playButton.addEventListener('click', hideRules);

function hideRules() {
    rules[0].style.display = "none";
}