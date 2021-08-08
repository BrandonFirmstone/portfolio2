/**
 * The array of text nodes.
 * Each text node has an ID, text and options.
 * Each option has text to describe itself as well as a nextText value to declare what text node should be shown next
 * The options can also have a setState value, adding any attributes required to the player.
 * It can also have a requiredState value, showing that the option can't be selected unless this condition is met.
 * The healthValue is how much the player's health bar should be changed. If the player loses health, it's a negative number.
 */
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
  