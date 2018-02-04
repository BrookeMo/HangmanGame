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
var userGuess;

function resetGame() {
    // Select a random word
    var newWord = words[Math.floor(Math.random() * words.length)];
    document.querySelector("#currentWord").innerHTML = newWord;
    // put guesses remaining = 10;
    document.querySelector("#remainingGuesses").innerHTML = 10;
// make letters guessed a blank array;
// Put it in a variable
};
resetGame ();
function createGame() {
// Change the letters into underscores, with spaces
// Put it in id=currentWord
};
/*document.querySelector('#currentWord').innerHTML = 'test';*/



document.onkeyup = function (event) {
    console.log(event.key);
    userGuess = event.key;
}
