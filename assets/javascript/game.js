var arrWordList = ["Yosemite"];
var answer = "";
var startingGuesses = 13;
var wins = 0;

var arrUsedLetters, remGuesses, curWord;

// user navigates to web page
// web page loads in
// 		all values set to initial
//			answer = remove a random word from the word list
//		message displays: "Press any key to get started!"
//	user presses a key
//		if key pressed is a letter
//			if letter is in the word
//				do things
//			else letter is not in the word
//				do other things
//	user wins game
//		increment wins
//		initialize values
//		

// renders the game to the page
// paremeters:
//		arrWord:     string displaying the current known letters and blanks
//		remGuesses:  integer containing the guesses remaining
// 		wins:        integer for number of wins
//      usedLetters: string containing all the used letters
function renderGame(arrWord, remGuesses, wins, arrUsedLetters) {
	// unsolved letters in arrWord are represented 
	// by underscores
	var currentWord = arrWord.join(" ");

	// used letters are displayed with ", " between them
	var usedLetters = arrUsedLetters.join(", ");

	// update the view
	document.querySelector("#current-word").textContent = currentWord;
	document.querySelector("#rem-guesses").textContent = remGuesses;
	document.querySelector("#wins").textContent = wins;
	document.querySelector("#letters-used").textContent = usedLetters;
}

// --------------------------------
// ---------- tests ---------------
// --------------------------------

// --- test renderGame() ---
// var testAnsw = "Yosemite";
// var testWord = "_,_,_,e,_,i,t,_";
// var testRemGuesses = 8;
// var testWins = 2;
// var testUsedLetters = "a,e,i,t,j";

// testWord = testWord.split(",");
// testUsedLetters = testUsedLetters.split(",");

// renderGame(testWord,testRemGuesses, 
// 	testWins, testUsedLetters);