const textElement = document.getElementById('dc-text')
const optionButtonsElement = document.getElementById('dc-option-buttons')

let state = {}
let playerClass = ""
let playerWeapon = ""

function startGame() {
  state = {}
  playerClass = ""
  showTextNode(1)
  document.getElementById("dc-health-bar").value = 100
  document.getElementById("dc-health-bar").max = 100
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('dc-btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  playerClass = option.setClass
  if (playerClass == "Archer"){
    playerWeapon = "Bow"
  } else if(playerClass == "Warrior"){
    playerWeapon = "Sword"
  } else{
    playerWeapon = "Wand"
  }
  if (option.maxHealthChange == null){
    console.log("no max health change")
  }
  else{
    if ((option.maxHealthChange <= 0) && (document.getElementById("dc-health-bar").max === document.getElementById("dc-health-bar").value)){
      document.getElementById("dc-health-bar").max += option.maxHealthChange
      console.log("health max reduced")
      document.getElementById("dc-health-bar").value = document.getElementById("dc-health-bar").max
      console.log("health value reduced to max")
    }else{
      document.getElementById("dc-health-bar").max += option.maxHealthChange
      console.log("health max changed")
    }
  }
  if (option.healthValue == null){
    console.log("no change in health value")
  }
  else{
    if ((document.getElementById("dc-health-bar").value + option.healthValue) >= document.getElementById("dc-health-bar").max){
      document.getElementById("dc-health-bar").value = document.getElementById("dc-health-bar").max
      console.log("Health maxed out")
    }
    else{
      document.getElementById("dc-health-bar").value += option.healthValue
      console.log("health changed by" + option.healthValue)
    }
  }
  if (document.getElementById("dc-health-bar").value <= 0){
    showTextNode(999)
  }else{
    showTextNode(nextTextNodeId)
  }
  
}

const textNodes = [
  {
    id: 1,
    text: 'Your adventure begins at your coming-of-age ceremony. After climbing the forested slopes of Trial Mountain you arrive at an ancient ruined shrine surrounded in engraved monoliths. You must make a decision.',
    options: [
      {
        text: 'Become an Archer',
        setClass: "Archer",
        maxHealthChange: 0,
        healthValue: 0,
        nextText: 2
      },
      {
        text: 'Become a Warrior',
        setClass: "Warrior",
        maxHealthChange: 50,
        healthValue: 50,
        nextText: 2
      },
      {
        text: 'Become a Mage',
        setClass: "Mage",
        maxHealthChange: -10,
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You have chosen to continue your adventure as a ' + playerClass + ". Looking at the foot of the monolith you see a " + playerWeapon + " resting. You claim the weapon as your own.",
    options: [
      {
        text: 'Continue',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: '',
    options: [
      {
        text: 'You stumble down the cliffs and make your way to the bottom. Your friend ',
        nextText: 4
      },
      {
        text: 'Find a room to sleep at in the town',
        nextText: 5
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
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