// === variables ===
var arrWordList = ["Yosemite", "Grand Canyon", "Yellowstone", "Acadia", "Canyon Lands"];
var answer = "";
var startingGuesses = 13;
var wins = 0;

var arrUsedLetters, remGuesses, curWord;

// user navigates to web page
// web page loads in
//		initialize new round
//			answer = remove a random word from the word list

//	user presses a key
//		if key pressed is a letter
//			handleGuess(lcase letter pressed)

//	user wins game
//		increment wins
//		answer = random word removed from word list
//		initialize new round

//	user loses game
//		answer = random word removed from word list
//		initialize new round

// initialize new round
//		arrUsedLetters = []
//		answer = random word removed from word list
//		remGuesses = startingGuesses
//		curWord = 
//		display game values

//	handleGuess(letter)
//     	if letter pressed is not in arrUsedLetters
//			decrement remGuesses
//			add letter to arrUsedLetters
//			if letter is in the word
//				update curWord
//			if curWord === answer
//				user wins round
//			else if remGuesses === 0
//				user loses game
//			else
//				update displayed game values

// === functions ===
function initNewRound() {
	// resets the values for the round and displays them
	arrUsedLetters = [];
	answer = arrWordList.pop();
	remGuesses = startingGuesses;
	curWord = "_".repeat(answer.length).split("");
	renderGameValues(curWord, remGuesses, wins, arrUsedLetters);
}

function renderGameValues(arrWord, remaingGuesses, winCount, arrGuesses) {
// renders the game to the page
// paremeters:
//		arrWord:     array of strings containing solved letters and underscores for current word
//		remaingGuesses:  integer containing the guesses remaining
// 		winCount:        integer for number of wins
//      usedLetters: string containing all the used letters

	// unsolved letters in arrWord are represented 
	// by underscores
	var currentWord = arrWord.join(" ");

	// used letters are displayed with ", " between them
	var usedLetters = arrGuesses.join(", ");

	// update the view
	document.querySelector("#current-word").textContent = currentWord;
	document.querySelector("#rem-guesses").textContent = remaingGuesses;
	document.querySelector("#wins").textContent = winCount;
	document.querySelector("#letters-used").textContent = usedLetters;
}

// === run on initial load ===
initNewRound();

document.onkeyup = function(event) {

	// keys a through z
	if ( event.keyCode >= 65 && event.keyCode <= 90 ){
		// handleGuess(event.key.toLowerCase());
		console.log(event.key);
	}

};

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

// renderGameValues(testWord,testRemGuesses, 
// 	testWins, testUsedLetters);