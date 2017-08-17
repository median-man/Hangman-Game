// === global vars ===
var startingGuesses = 13;

/*
view
provides methods for manipulating the view
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
        alert: function(msg) {
            // dipslays important message to the user
            alert(msg);
        },
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
var game = (function() {
    var oAnswer, arrUsedLetters, remGuesses, curWord, wins;
    var wins = 0;
    var getWord = function () {
        // returns an object from words array at random. object
        // is removed from the array. returns an empty array
        // if words.length is 0.
        var i = Math.floor(Math.random()*words.length);
        return words.splice(i, 1)[0];
    }
    var handleGuess = function (letter) {
        // handles letter guessed by user
        if (arrUsedLetters.indexOf(letter) === -1) {
            remGuesses--;
            arrUsedLetters.push(letter);
            if (oAnswer.word.toLowerCase().indexOf(letter) > -1) {
                for (var i = 0; i < oAnswer.word.length; i++) {
                    if (oAnswer.word[i].toLowerCase() === letter) {
                        // replace _ with letter from oAnswer 
                        // (this way case displays correctly)
                        curWord[i] = oAnswer.word[i];
                    }
                }
            }
            // check if user has won or lost
            if (curWord.join("") === oAnswer.word) {
                wins++;
                view.renderImage(oAnswer.image, oAnswer.alt);
                view.render(curWord, remGuesses, wins, arrUsedLetters);
                newRound();
            } else if (remGuesses === 0) {
                view.hideImage();
                newRound();
            }
            view.render(curWord, remGuesses, wins, arrUsedLetters);
        }        
    }
    var newRound = function() {
        // resets the values to start a new round
        arrUsedLetters = [];
        oAnswer = getWord();
        remGuesses = startingGuesses;
        if (!oAnswer) {
            // all words from data exhausted. alert the user and reload the page.
            view.alert("Game over. Restarting the game.");
            location.reload();
        } else {
            curWord = "_".repeat(oAnswer.word.length).split("");
        }        
    }
    return {
        run: function() {
            // starts the app

            // listen for letter keys
            document.onkeyup = function(event) {
                // keys a through z
                if (event.keyCode >= 65 && event.keyCode <= 90) {
                    handleGuess(event.key.toLowerCase());
                }
            };
            newRound();
            view.render(curWord, remGuesses, wins, arrUsedLetters);
        }
    };
})();

game.run();

