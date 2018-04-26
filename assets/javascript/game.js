// =====================================================================
// Global Variables
// =====================================================================

// Word Options
var words = [
    "QuiGonJinn",
    "HanSolo",
    "KyloRen",
    "PoeDameron",
    "DarthVader",
    "JarJarBinks",
    "LukeSkywalker",
    "PrincessLeia"
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
    document.querySelector("#guessedLetters").innerHTML = wrongGuesses;
};

// =============================================
// Function to check guesses
// =============================================
function gamePlay(letter){
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
// Function to check guesses
// =============================================

    //when user presses a key
        document.onkeyup = function (event) {
            userGuess = event.key;
            //that key is placed into the lettersGuessed Array
            lettersGuessed.push(userGuess);
            document.querySelector("#guessedLetters").innerHTML = lettersGuessed;
            // if the key has alredy been pressed,
                // do nothing
            // if the key has not already been pressed, and 
            // if the key is in the word,
            if (newWord.indexOf(userGuess) > -1) {
                // change the _ to the key
                var index = newWord.indexOf(userGuess);
                underscoredWord[index] = userGuess;
                
                underscoredWord = underscoreArray.join(" ");
                document.querySelector("#currentWord").innerHTML = underscoredWord;
            }
            // if the key is not in the word,
            else {
                // minus one from the guesses remaining
                guessesRemaining--;
                document.querySelector("#remainingGuesses").innerHTML = guessesRemaining;
            }
            if (guessesRemaining === 0) {
                document.querySelector("#image").src = '../HangmanGame/assets/images/gameover.png';
                // insert the gameover.png in the img div
                // run the resetGame function again
            // if the word is completed,
                // run the coinciding image in the img div
                // run the resetGame function
                    // if all word have been solved,
                        // run the you-win.png in the img div
                        // run the reset Game function
            };
            };
        //once the remainingGuesses = 0, GAME OVER
};
gamePlay ();