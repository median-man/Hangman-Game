// renders the game to the page
// paremeters:
//		word:        string displaying the current known letters and blanks
//		remGuesses:  integer containing the guesses remaining
// 		wins:        integer for number of wins
//      usedLetters: string containing all the used letters
function renderGame(arrWord, remGuesses, wins, usedLetters) {


	console.log("word: " + arrWord.join(" "));
	console.log("guesses rem: " + remGuesses);
	console.log("wins: " + wins);
	console.log("letters: " + usedLetters);
}