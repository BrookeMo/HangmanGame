// =====================================================================
// Global Variables
// =====================================================================

// Word Options
var words = [
    "QUIGONJINN",
    "HANSOLO",
    "KYLOREN",
    "POEDAMERON",
    "DARTHVADER",
    "JARJARBINKS",
    "LUKESKYWALKER",
    "PRINCESSLEIA"
];
// the word currently being guessed
var gameWord = "";
// array of letters in gameWord
var gameWordLetters = [];
// the number of blank spaces
var blanks = 0;
// array of both blanks and guessed letters
var blanksAndGuessed = [];
// array of wrong guesses
var wrongGuesses = [];

// Score Counters
var winCount = 0;
var lossCount = 0;
var guessesRemaining = 10;

// ====================================================================
// Functions
// ====================================================================

// =============================================
// Function to begin a round
// =============================================
function resetGame() {
    // resets to give the player 10 guesses
    guessesRemaining = 10;

    // Select a random word
    gameWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
        // console the solution
        console.log(newWord);
    // split the word into an array of letters
    gameWordLetters = newWord.split("");
        // console the array
        console.log(gameWordLetters);
    // make the array blank spaces for the user
    blanks = gameWordLetters.length;
        // console the number of blanks
        console.log(blanks);

    // clear any previous guesses from other rounds
    blanksAndGuessed = [];
    wrongGuesses = [];
    // fill the correct word array with blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndGuessed.push("_");
    }
        // console the new array
        console.log(blanksAndGuessed);

    // Display the unsolved word, with spaces between each letter
    document.querySelector("#currentWord").innerHTML = blanksAndGuessed.join(" ");
    // Display the amount of guesses the player starts with
    document.querySelector("#remainingGuesses").innerHTML = guessesRemaining;
    // Clear any incorrect guesses from previous rounds
    document.querySelector("#guessedLetters").innerHTML = wrongGuesses.join(" ");
};

// =============================================
// Function to check guesses
// =============================================
function checkGuess(letter){
    // variable that changes depending on whether the guess was correct or not
    var letterInWord = false;

    //checking if the letter is in the solution
    for (var i = 0; i < blanks; i++) {
        if (gameWord[i] === letter) {
            // make the variable change to true
            letterInWord = true;
        }
    }

    // if the guess was correct,
    if (letterInWord) {
        // find where the letter belongs in the word
        for (var j = 0; j < blanks; j++) {
            if (gameWord[j] === letter) {
                // and change the _ to the letter
                blanksAndGuessed[j] = letter;
                    // console the new array for testing
                    console.log(blanksAndGuessed);
            }
        }
    }
    //if the guess was incorrect,
    else {
        // we add the letter to the the wrongGuesses array
        wrongGuesses.push(letter);
        // and take away a turn
        guessesRemaining--;
    }
};

// =============================================
// Function to run after the letter is checked
// =============================================
function updateGame() {

    // update the html
    document.querySelector("#currentWord").innerHTML = blanksAndGuessed.join(" ");
    document.querySelector("#remainingGuesses").innerHTML = guessesRemaining;
    document.querySelector("#guessedLetters").innerHTML = wrongGuesses.join(" ");

    // if the word is complete
    if (gameWordLetters.toString() === blanksAndGuessed.toString()) {
        // add to the win count
        winCount++;
        // add the you win picture in the html
        // PUT CODE HERE
        // update the win count in the html
        document.querySelector("#totalWins").innerHTML = winCount;
        // and start a new round
        resetGame();
    }

    // if the player runs out of guesses
    else if (guessesRemaining === 0) {
        // add to the loss count
        lossCount++;
        // add the you lost picture in the html
        // PUT CODE HERE
        // update the loss count in the html
        document.querySelector("#totalLosses").innerHTML = lossCount;
        // and start a new round
        resetGame();
    }
};

// ====================================================================
// Running the Functions | Main Process
// ====================================================================

// start the game
resetGame();

// when the player types a letter, it
document.onkeyup = function(event) {
    //converts all key clicks to uppercase letters (to match the words array)
    var letterGuessed = String.fromCharCode(event.which).toUpperCase();
    // runs the checkGuess function
    checkGuess(letterGuessed);
    // runs the updateGame function
    updateGame();
}

