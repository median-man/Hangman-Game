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
            imgEl.classList.add(hideClass);
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

/*
view
all aspects and functions of the display
*/
var view = {
    render: function(arrWord, iGuessesLeft, iWins, arrLetters) {
        // renders the game to the page

        // unsolved letters in arrWord are represented 
        // by underscores
        var currentWord = arrWord.join(" ");

        // used letters are displayed with ", " between them
        var usedLetters = arrLetters.join(", ");

        // update the view
        document.querySelector("#current-word").textContent = currentWord;
        document.querySelector("#rem-guesses").textContent = iGuessesLeft;
        document.querySelector("#wins").textContent = iWins;
        document.querySelector("#letters-used").textContent = usedLetters;            
    }

};

var game = {
    newRound: function() {
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
};


// === functions ===
function initNewRound() {
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
            view.render(curWord, remGuesses, wins, arrUsedLetters);
            game.newRound();
        } else if (remGuesses === 0) {
            image.hide();
            game.newRound();
        }
        view.render(curWord, remGuesses, wins, arrUsedLetters);
    }
}

// === event listenrs ===
document.onkeyup = function(event) {
    // keys a through z
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        handleGuess(event.key.toLowerCase());
    }

};

// === code below this point runs on initial load ===
game.newRound();
view.render(curWord, remGuesses, wins, arrUsedLetters);

