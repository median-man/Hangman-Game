// renders the game to the page
// paremeters:
//		word:        string displaying the current known letters and blanks
//		remGuesses:  integer containing the guesses remaining
// 		wins:        integer for number of wins
//      usedLetters: string containing all the used letters
function renderGame(arrWord, remGuesses, wins, usedLetters) {


	console.log(arrWord);
	console.log(typeof arrWord.join);
	var s = arrWord.join(" ");
	// display current solution ( "a _ _" )
	if ( arrWord.length > 0 ) {
		document.getElementById("word").textContent = "hello";
		
	}
	// display the number of guesses remaining
	// display number of wins
	// display the letters already guessed	


}

var testWord = "hello";
renderGame( testWord.split(""), " ", " ", " " );