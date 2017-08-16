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
//		if (key pressed is a letter && letter pressed is not in
//			arrUsedLetters)
//			handleGuess()
//			decrement remGuesses
//			add letter to arrUsedLetters
//			if letter is in the word
//				update curWord
//		if curWord === answer
//			user wins round
//		else if remGuesses === 0
//			user loses game
//		else
//			update displayed game values

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
//		

function renderGameValues(arrWord, remGuesses, wins, arrUsedLetters) {
// renders the game to the page
// paremeters:
//		arrWord:     string displaying the current known letters and blanks
//		remGuesses:  integer containing the guesses remaining
// 		wins:        integer for number of wins
//      usedLetters: string containing all the used letters

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

// renderGameValues(testWord,testRemGuesses, 
// 	testWins, testUsedLetters);