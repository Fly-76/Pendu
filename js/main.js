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
let userSolution;
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

// Play the game
function play() {

    // game initialization
    let answerCnt = 1;
    let wordIndex = getRandomInt(WORD_LIST.length);
    let hiddenWord = WORD_LIST[wordIndex].split('');
    userSolution = HIDDEN.repeat(hiddenWord.length).split('');

    // start playing
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
}

// Display game's rules
function displayRules() {
    let msg = "Computer choose a word, user has 7 times to find this word.\n";
    msg += "Each time user find a letter, this one is displayed in the hidden word";
    alert(msg)
}

// *** Main code **************************************************
function main(){
    // *** Display a wellcome message
    alert("Bienvenue dans le jeu du pendu");

    // *** Display a user menu with multiple choice
    do {
        let msg = `Que voulez-vous faire?\tj: jouer\tr: afficher les règles\tq: quitter`;
        choice = prompt(msg);
        if (checkChoiceOK(choice))
            if (choice=='j') play();
            if (choice=='r') displayRules();
            if (choice=='q') return;
    } while(true)
}

main();