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

function resetGame() {
    // Select a random word
    var newWord = words[Math.floor(Math.random() * words.length)];
    // Change the letters into underscores
		var underscoreArray = []
		for (var i = 0 ; i < newWord.length; i++) {
			underscoreArray.push("_");
		}
        underscoredWord = underscoreArray;
    // Make the ',' into spaces
    // Display the unsolved word
    document.querySelector("#currentWord").innerHTML = underscoredWord;
    // put guesses remaining = 10;
    document.querySelector("#remainingGuesses").innerHTML = 10;
    // make letters guessed a blank array;
    var lettersGuessed = [];
};
resetGame ();

function gamePlay (){
    //when user presses a key
        //that key is placed into the lettersGuessed Array
        document.onkeyup = function (event) {
            userGuess = event.key;
            lettersGuessed.push(userGuess);
        }
        document.querySelector("#guessedLetters").innerHTML = lettersGuessed;
        
        //if the letter was in the word, replace the _ with the letter
        //if the letter was not in the word, subtract 1 from the remainingGuesses

        //once the remainingGuesses = 0, GAME OVER
        //once to word is completed, display picture and song
}
gamePlay ();
//resetGame ();



document.onkeyup = function (event) {
    console.log(event.key);
    userGuess = event.key;
}
