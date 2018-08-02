# Hangman: National Parks Game
Hangman game with a National Parks theme.

Guess letters to complete the word before running out of attempts. A picture related to the word is displayed if the word is completed successfully.

[Play Hangman: National Parks.][hangman]

## How to Play
Use the keyboard to guess letters. The goal is to guess all of the letters in the word. Each time a letter that is not part of the word is selected, a “guess” will be deducted. If the guesses run out, a new word will be displayed. Upon completing a word, an image that is related to the word and a new word is selected. The “wins” box tracks the number of words successfully completed.

## Background
My initial reason for creating this app was to satisfy the requirement for an assignment for the Coding Bootcamp at UCSD Extension. Since then, I periodically return to the app and update it to get practice implementing new Javascript libraries and patterns as I learn them.

## About
The app is coded using HTML, CSS, and vanilla Javascript in its current version. I have plans to re-write the app using React/Redux to get practice and better learn this libraries. I also plan to support keyboard input on a mobile device.

All photos are sourced from the NPS website and, to the best of my knowledge, part of the public domain. [National Park Service Multimedia Search][nps-mm-search] was used to find the photos.

## Customize
Easily [clone this repository][code] and customize the content. All images should be placed in the “images” folder. The words used by the game my be found in “assets/javascript/words.js”. This file creates a global array of objects for each word with the following structure:
```javascript
[
    {
        word: “example”, // no spaces or special characters allowed
        image: “example.jpg”, // name of the file located in assets/images folder
        alt: “example image alt text”, // text for the alt property of the img element
    }
]
```

The "word" property is the word that the user must guess. The word is a string and must not contain whitespace or non-alphabetic character. The image is a string containing the name of the image file to display when the word is completed successfully. Alt property should contain the text for the alt property of the image.

The title text must be updated in index.html. Update the background image by changing the “background-image” rule for the body in “assets/css/style.css”.

<!-- links -->
[hangman]:https://median-man.github.io/Hangman-National-Parks/
[code]:https://github.com/median-man/Hangman-National-Parks
[nps-mm-search]:https://www.nps.gov/media/multimedia-search.htm