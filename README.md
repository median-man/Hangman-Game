# Hangman-Game
A National Park themed hangman game.

View published version on [Github Pages](https://median-man.github.io/Hangman-Game/).

## Specs
This must satisfy the specifications described in the homework instructions found [here](http://ucsd.bootcampcontent.com/UCSD-Coding-Bootcamp/08-07-2017-UCSD-San-Diego-Class-Repositoy-FSF-FT/blob/master/homework/03-javascript/02-Homework/Instructions/homework-instructions.md).

* Starts when any key is pressed.
* Displays and track number of wins.
* Uses an underscore "\_" (underscore) character for unknown letters.
* Correctly guessed letters are displayed in place of the "\_".
* Displays number of guesses remaining.
* Displayes a list of the letters already guessed.
* Automatically choose another word when the user wins/loses the game and starts the next round.
* Prevents user from guessing the same letter twice.

### Due Date:
11:59 PM on Thursday, August 17, 2017.

## To Do:
* wrap game in an object
* wrap view in an object

## Hangman Game Elements

### Output
* letters/place holders for word
.* number letter/placeholders === length of the word
.* uses \_ for unknown letters per specs
* number of guesses remaining
* number of wins
* letters already guessed

### Inputs
* letter (user)
* pool of words (data)
* starting number of guesses
.* hard coded number or calculated from word?