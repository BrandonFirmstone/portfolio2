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




const textElement = document.getElementById('dc-text');
const optionButtonsElement = document.getElementById('dc-option-buttons');

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
  document.getElementById("dc-health-bar").value = 100;
  document.getElementById("dc-health-bar").max = 100;
}

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

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);

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

const textNodes = [
  {
    id: 1,
    text: 'Your adventure begins at your coming-of-age ceremony. After climbing the forested slopes of Trial Mountain you arrive at an ancient ruined shrine surrounded in engraved monoliths. You must make a decision.',
    options: [
      {
        text: 'Become an Archer',
        setState: {Archer: true},
        healthValue: 0,
        nextText: 2
      },
      {
        text: 'Become a Warrior',
        setState: {Warrior: true},
        healthValue: 50,
        nextText: 3
      },
      {
        text: 'Become a Mage',
        setState: {Mage: true},
        nextText: 4
      },
      {
        text: 'Become a Rogue',
        setState: {Rogue: true},
        nextText: 5
      }
    ]
  },
  {
    id: 2,
    text: "You have chosen to continue your adventure as an archer. Looking at the foot of the monolith you see a bow resting on the floor. You claim the weapon as your own.",
    options: [
      {
        text: 'Continue',
        nextText: 6
      }
    ]
  },
  {
    id: 3,
    text: 'You have chosen the mighty path of the warrior. To the side of the monolith is a sword, stained with blood. You wipe the blade on your pants and claim it as your own.',
    options: [
      {
        text: 'Continue',
        nextText: 6
      },
    ]
  },
  {
    id: 4,
    text: 'You chose the path of the mind - the path of a mage. After reflecting on your decision for a moment, you notice a suspicious and large stick on the floor. Upon further inspection, you have found a wand to make your own.',
    options: [
      {
        text: 'Continue',
        nextText: 6
      }
    ]
  },
  {
    id: 5,
    text: 'After choosing the conniving and scheming path of the rogue, you loot a chest tucked away behind the monolith. It held two daggers, clearly used, for you to make use of.',
    options: [
      {
        text: 'Continue',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: "You traverse back down the mountain, eager to begin your personal journey. You're not entirely sure where to start, even after dreaming about it all your life.",
    options: [
      {
        text: 'Head to the capital',
        nextText: 7
      },
      {
        text: 'Head to the forest',
        nextText: 101
      },
      {
        text: 'Head to the coast',
        nextText: 201
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  },
  {
    id: 999,
    text: 'You have died. Start again?',
    options: [
      {
        text:"Restart",
        nextText: -1
      }
    ]
  }
]

startGame();