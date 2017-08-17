// === variables ===
var oAnswer;
var startingGuesses = 13;
var wins = 0;

var arrUsedLetters, remGuesses, curWord;

//=== objects ===
/*
image
contains methods and properties for displayed image
*/
var image = (function() {
    var hideClass = "hidden";
    var imgPath = "assets/images/";
    var imgEl = document.querySelector("img");
    return {
        hide: function () {
        },
        show: function () {
            imgEl.classList.remove(hideClass);
        },
        set: function (src, alt) {
            // renders  img for string src and string alt and 
            // unhides the image
            imgEl.setAttribute("src", imgPath + src);
            imgEl.setAttribute("alt", alt);
            this.show();
        }
    };
})();

// === functions ===
function initNewRound() {
    // resets the values to start a new round
    arrUsedLetters = [];
    oAnswer = data.pop();
    remGuesses = startingGuesses;
    if (!oAnswer) {
        alert("All out of words! Refresh your browser to keep playing.");
    } else {
        curWord = "_".repeat(oAnswer.word.length).split("");
    }
}

function handleGuess(letter) {
    // handles letter guessed by user
    if (arrUsedLetters.indexOf(letter) === -1) {
        remGuesses--;
        arrUsedLetters.push(letter);
        if (oAnswer.word.toLowerCase().indexOf(letter) > -1) {
            for (var i = 0; i < oAnswer.word.length; i++) {
                if (oAnswer.word[i].toLowerCase() === letter) {
                    // replace _ with letter from oAnswer 
                    // (this way case is correct)
                    curWord[i] = oAnswer.word[i];
                }
            }
        }
        // check if user has won or lost
        if (curWord.join("") === oAnswer.word) {
            wins++;
            image.set(oAnswer.image, oAnswer.alt);
            image.show();
            renderGameValues(curWord, remGuesses, wins, arrUsedLetters);
            initNewRound();
        } else if (remGuesses === 0) {
            initNewRound();
        }
        renderGameValues(curWord, remGuesses, wins, arrUsedLetters);
    }
}

function renderGameValues(arrWord, remaingGuesses, winCount, arrGuesses) {
    // renders the game to the page

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

// === event listenrs ===
document.onkeyup = function(event) {
    // keys a through z
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        handleGuess(event.key.toLowerCase());
    }

};

// === code below this point runs on initial load ===
initNewRound();
renderGameValues(curWord, remGuesses, wins, arrUsedLetters);

