/******************************************************************
*
*       Jeu du pendu
*
*******************************************************************/

// *** Constants **************************************************
const WORD_LIST = ["arbre", "soleil", "oiseau", "baleine", "noix"];
const HIDDEN = '_';

// *** Variables **************************************************
let wordCnt = WORD_LIST.length;
let answerCnt = 1;
let choice;

// *** Functions **************************************************

// Generate an integer betweeb 0 - max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Check if a character is a letter a - z, A - Z
function isAlpha(car) {
    return car>='a' && car<='z' || car>='A' && car<='Z';
}

// Check if user find all letters
function letterToFind() {
    return userSolution.includes(HIDDEN);
}

// Check if user input is Ok
function checkChoiceOK(userChoice) {
    let validChoice=false;

    if (userChoice != null)
        if (userChoice.length==1)
            if (isAlpha(userChoice)) validChoice=true;
    return validChoice;
}

// *** Main code **************************************************

// *** Afficher message de bienvenue
alert("Bienvenue dans le jeu du pendu");

// *** Générer un choix aléatoire
let wordIndex = getRandomInt(WORD_LIST.length);
let hiddenWord = WORD_LIST[wordIndex].split('');

// *** Afficher le choix sous forme de underscore
let userSolution = HIDDEN.repeat(hiddenWord.length).split('');

do {
    console.log(userSolution);
    do {
        // *** Proposer au joueur de rentrer une lettre
        let msg = `Tour ${answerCnt} \t${userSolution} \t Veuillez entrer une lettre`;
        choice = prompt(msg);
    }
    // *** Tester si le choix utilisateur est valide
    while(!(checkChoiceOK(choice)))

    // *** Mettre à jour le nombre de points
    answerCnt++;

    // *** Vérifier si la lettre est dans le mot
    choice.toLowerCase();
    for (let i=0 ; i<hiddenWord.length ; i++)
        if (choice==hiddenWord[i])
            userSolution[i]=choice

// *** Vérifier si le jeu doit continuer
} while (answerCnt<=7 && letterToFind())

// *** Arrêter ou Afficher le mot mis à jour
if (letterToFind()) alert("Vous avez perdu");
else alert(`Vous avez gagner en ${answerCnt-1} coups`)

