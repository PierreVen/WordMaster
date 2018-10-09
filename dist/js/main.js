window.addEventListener("load", init);
var randomWords = require("random-words");

//Globals

//Available Levels
const Levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

//To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInut = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = randomWords();

//Initialize Game
function init() {
  //Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  //Load word from array
  showWord(words);
  //Start matching on word input
  wordInut.addEventListener("input", startMatch);
  //Call countdown every second
  setInterval(countdown, 1000);
  //Check game status
  setInterval(checkStatus, 50);
}

//Start Match
function startmatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInut.value = "";
    score++;
  }
  //If score is -1 display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//Match currentWord to wordInput
function matchWords() {
  if (wordInut.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

//Pick & show random word
function showWord(words) {
  //Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  //Output random word
  current.innerHTML = words[randomIndex];
}

//Countdown timer
function countdown() {
  //Make sure time not run out
  if (time > 0) {
    //Decrement
    time--;
  } else if (time === 0) {
    //Game is over
    isPlaying = flase;
  }
  //Show time
  timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
  if (!isPlaying && time === 0);
  mesage.innerHTML = "Game Over";
  score = -1;
}
