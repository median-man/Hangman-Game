// === global variables ===
var oAnswer;
var startingGuesses = 13;
var wins = 0;

var arrUsedLetters, remGuesses, curWord;

//=== objects ===
/*
view
all aspects and functions of the display
*/
var view = (function() {
    var image = ( function() {
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
    } )();
    return {
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
        },
        renderImage: function(src, alt) {
            image.set(src, alt);
            image.show();
        },
        hideImage: function() {
            image.hide();
        }
    }


})();

/*
game
controls game and contains all game logic
*/
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
    },
    handleGuess: function (letter) {
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
                view.renderImage(oAnswer.image, oAnswer.alt);
                view.render(curWord, remGuesses, wins, arrUsedLetters);
                game.newRound();
            } else if (remGuesses === 0) {
                view.hideImage();
                this.newRound();
            }
            view.render(curWord, remGuesses, wins, arrUsedLetters);
        }        
    }
};

// === event listenrs ===
document.onkeyup = function(event) {
    // keys a through z
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        game.handleGuess(event.key.toLowerCase());
    }

};

// === code below this point runs on initial load ===
game.newRound();
view.render(curWord, remGuesses, wins, arrUsedLetters);

