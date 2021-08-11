 /*jshint esversion: 6 */ 

/**
  *
  * The concepts in this javascript file came from https://www.youtube.com/watch?v=R1S_NhKkvGA&t=119s.
  * I adapted the story for my own and put the textNodes into story.js so it's easier to update.
  * I added healthValues to the options so I can keep track of a character’s health as they progress. 
  * This allows them to die due based on their choices through the story not due to just one decision.
  * 
  * 
  */



/* Sets the textElement variable to the text in the DOM with ID 'dc-text' */
const textElement = document.getElementById('dc-text');
/* Sets the optionButtonsElement to the grid of buttons in the DOM with ID 'dc-option-buttons' */
const optionButtonsElement = document.getElementById('dc-option-buttons');

/* Declares the variable state as an object */
let state = {};
let backgroundMusic = "";

/**
 * Function to start the game
 * 1) Clears the state object variable
 * 2) Sets the health bar too a value of 100, with a max of 100
 * 3) Runs the function showTextNode, starting with the first text node
 */
function startGame() {
  state = {};
  backgroundMusic = "../music/Adventure.mp3";
  document.getElementById("dc-health-bar").value = 100;
  document.getElementById("dc-health-bar").max = 100;
  showTextNode(1);
}

/**
 * Function to show the next set of story text
 * 1) Declares the variable textNode as the selected text node from the array of textNodes
 * 2) sets the text content of textElement as the text inside the textNode object inside the textNodes array
 * 3) Removes all of the buttons
 * 4) Displays each option in the form of a button
 * 5) Adds an event listener to each option, running the selectOption function with the option selected
 * @param {*} textNodeIndex Selects the text node to be displayed next
 */
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('dc-btn');
      button.addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  })
}

/**
 * 
 * @param {*} option The specific option to be shown
 * @returns if the option hasn't got a required state or what that state is
 */
function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

/**
 * 1) Checks for changes in health value, either adds or removes health, if health is zero or less, the player is dead and shows
 * a message at the text node 999
 * 2) Assigns any attributes to the state that are specified in the option
 * 3) Runs the function showTextNode with the ID of the next text node
 * @param {*} option the option that has been selected
 * @returns if the next text node ID is 0 or less, the game starts again
 */
function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  
  if (option.setMusic != null){
    if (option.setMusic != backgroundMusic){
      if (option.setMusic === "Adventure"){
        backgroundMusic = "../music/Adventure.mp3";
      } else if(option.setMusic === "Tavern"){
        backgroundMusic = "../music/Tavern.mp3";
      } else if(option.setMusic === "Battle"){
        backgroundMusic = "../music/Battle.mp3";
      } else{
        backgroundMusic = "../music/Adventure.mp3";
      }
    }
  }
  if (audioOn === true){
    backingTrack = new Audio(backgroundMusic);
    backingTrack.play();
  } else{
    backingTrack.pause();
    backingTrack.currentTime = 0;
  }
  if (option.healthValue == null){
    console.log("no change in health value");
  }
  else{
    if ((document.getElementById("dc-health-bar").value + option.healthValue) >= document.getElementById("dc-health-bar").max){
      document.getElementById("dc-health-bar").value = document.getElementById("dc-health-bar").max;
      console.log("Health maxed out");
    }
    else{
      document.getElementById("dc-health-bar").value += option.healthValue;
      console.log("health changed by" + option.healthValue);
    }
  }
  if (document.getElementById("dc-health-bar").value <= 0){
    showTextNode(999);
  }else{
    showTextNode(nextTextNodeId);
  }
  
}

/**
 * Hides JavaScript warning when content loads successfully
 */
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('dc-javascript-warning').style.display = 'none';
});

let audioButton = document.createElement("i");
audioButton.classList.add('audio-setting');
audioButton.classList.add('fa-volume-up');
audioButton.classList.add('fa');
document.getElementById('dc-audio-button').appendChild(audioButton);

audioButton.addEventListener('click', musicSetting);
let audioOn = false;
function musicSetting(){
  if (audioButton.classList.value === "audio-setting fas fa-volume-up"){
    audioButton.classList.value = 'audio-setting fas fa-volume-mute';
    audioOn = false;
  } else{
    audioButton.classList.value = 'audio-setting fas fa-volume-up';
    audioOn = true;
  }
}
/* Runs the game */
startGame();