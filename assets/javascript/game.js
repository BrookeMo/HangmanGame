// My array of words
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
var winCount = 0;  
var lettersGuessed = [];                   
var guessesRemaining = 10;
var newWord = "";
var underscoredWord = "";
var underscoreArray = [];


function resetGame() {
    // Select a random word
    newWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    console.log(newWord);
    newWord = newWord.split("");
    console.log(newWord);
    // Change the letters into underscores
		for (var i = 0 ; i < newWord.length; i++) {
			underscoreArray.push("_");
        }
    // Change the array into a string
        underscoredWord = underscoreArray.join(" ");
    // Display the unsolved word
    document.querySelector("#currentWord").innerHTML = underscoredWord;
    // put guesses remaining = 10;
    document.querySelector("#remainingGuesses").innerHTML = 10;
    // make letters guessed a blank array;
    document.querySelector("#guessedLetters").innerHTML = lettersGuessed;
};
resetGame ();

function gamePlay (){
    //when user presses a key
        document.onkeyup = function (event) {
            userGuess = event.key;
            //that key is placed into the lettersGuessed Array
            lettersGuessed.push(userGuess);
            document.querySelector("#guessedLetters").innerHTML = lettersGuessed;
            // if the key is in the word,
            if (newWord.indexOf(userGuess) > -1) {
                // change the _ to the key
                console.log(newWord.indexOf(userGuess));
                var index = newWord.indexOf(userGuess);
                console.log(underscoredWord);
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
            if (guessesRemaining = 0) {
                // insert the gameover.png in the img div
                // run the resetGame function again
            }
            // if the word is completed,
                // run the coinciding image in the img div
                // run the resetGame function
                    // if all word have been solved,
                        // run the you-win.png in the img div
                        // ren the reset Game function
            };
        //once the remainingGuesses = 0, GAME OVER
        //once to word is completed, display picture and song
};
gamePlay ();