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
        {name: "stingray", img: "/assets/images/stingray-5.png"},
        {name: "stingray", img: "/assets/images/stingray-5.png"},
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
        console.log(cardInfo);

    };
    
    randomize();



// RESET GAME //

// HOW TO PLAY >> included pop up instructions //

    