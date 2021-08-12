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
          setMusic = "Adventure",
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
          requiredState: (currentState) => currentState.Archer,
          nextText: 7
        },
        {
          text: 'Head to the capital',
          requiredState: (currentState) => currentState.Warrior,
          nextText: 8
        },
        {
          text: 'Head to the capital',
          requiredState: (currentState) => currentState.Mage,
          nextText: 9
        },
        {
          text: 'Head to the capital',
          requiredState: (currentState) => currentState.Rogue,
          nextText: 10
        },
        {
          text: 'Head to the coast',
          nextText: 1000,
          healthValue: -90,
          setMusic: "Battle"
        },
        {
          text: 'Head to the forest',
          healthValue: -40,
          nextText: 2000,
          setMusic: "Battle"
        }
      ]
    },
    {
      id: 7,
      text: 'You shuffle your newly found bow onto your back and head towards the capital. The journey is known to be perilous, with monsters consistently attacking new adventurers. You head towards the Black Grotto Inn, a famously rowdy pub not too far from where you are.',
      options: [
        {
          text: 'Continue',
          nextText: 11,
          setMusic: "Tavern"
        }
      ]
    },
    {
      id: 8,
      text: 'You fasten your sword to your belt and get used to the weight on your hip. The journey is known to be perilous, with monsters consistently attacking new adventurers. You head towards the Black Grotto Inn, a famously rowdy pub not too far from where you are.',
      options: [
        {
          text: 'Continue',
          nextText: 11,
          setMusic: "Tavern"
        }
      ]
    },
    {
      id: 9,
      text: "You know that to make it as a mage, you need rigorous training. The best place to do that would be the capital's Mage Guild. The journey is known to be perilous, with monsters consistently attacking new adventurers. You head towards the Black Grotto Inn, a famously rowdy pub not too far from where you are.",
      options: [
        {
          text: 'Continue',
          nextText: 11,
          setMusic: "Tavern"
        }
      ]
    },
    {
      id: 10,
      text: 'The lords and nobles have pockets filled with gold and trinkets perfect to line your own with. The capital is the best bet for making money fast. The journey is known to be perilous, with monsters consistently attacking new adventurers. You head towards the Black Grotto Inn, a famously rowdy pub not too far from where you are.',
      options: [
        {
          text: 'Continue',
          nextText: 11,
          setMusic: "Tavern"
        }
      ]
    },
    {
      id: 11,
      text: 'You make it to the tavern, having surprisingly encountered no problems on the way. You can smell the booze and sweat all the way from the doors. You make your way inside.',
      options: [
        {
          text: 'Sit at the bar',
          nextText: 12
        },
        {
          text: 'Find someone to arm wrestle',
          nextText: 14,
          requiredState: (currentState) => currentState.Warrior
        },
        {
          text: 'Sit outside',
          nextText: 16,
          requiredState: (currentState) => currentState.Archer
        },
        {
          text: 'Play some chess',
          nextText: 18,
          requiredState: (currentState) => currentState.Mage
        },
        {
          text: 'Find a mark',
          nextText: 20,
          requiredState: (currentState) => currentState.Rogue
        },
        {
          text: 'Sit at a table',
          nextText: 22
        }
      ]
    },
    {
      id: 12,
      text: 'You look to the bar, spotting that every seat is taken. You decide to sit elsewhere.',
      options: [
        {
          text: "Sit at a table",
          nextText: 22
        }
      ]
    },
    {
      id: 14,
      text: "Looking all around the pub, you can't see anyone to arm wrestle. It's probably best to sit at a table and let them come to you.",
      options: [
        {
          text: "Sit at a table",
          nextText: 22
        }
      ]
    },
    {
      id: 16,
      text: "You sit outside the pub. You sit for a moment and take a puff of your pipeleaf. It's noisy but quiet. Few people are sat outside. A few older people sit and gossip, but very little else is going on.",
      options: [
        {
          text: "Sit inside instead",
          nextText: 22
        },
        {
          text: "Play your ukelele",
          nextText: 17
        }
      ]
    },
    {
      id: 17,
      text: "You pull your ukelele out of your bag. You begin tuning the instrument making sure it's perfect. One of the older men walks up to you and swiftly launches his pipe ash at you. You decide to quietly head inside.",
      options: [
        {
          text: "Continue",
          healthValue: -15,
          nextText: 22
        }
      ]
    },
    {
      id: 18,
      text: "You find some men playing chess together. Everyone's in the middle of games so you decide to stand by and watch - at least until you could have a game. The men moved their pieces with little enthusiasm, each move at a snail's pace. You're tired of waiting.",
      options:[
        {
          text: "Find a table",
          nextText: 22
        },
        {
          text: "Be patient",
          nextText: 19
        }
      ]
    },
    {
      id: 19,
      text: "You wait for a bit longer. Some of the men are so slow they almost look dead. After waiting ten whole minutes, you've reached your limit. You go to find a table.",
      options: [
        {
          text: "Find a table",
          nextText: 22
        }
      ]
    },
    {
      id: 20,
      text: "You scout the place and try to find a mark. The pub is full of old men, loud men, big men, small men. You've only just become a rogue, you've never pickpocketed before.",
      options: [
        {
          text: "Thieve",
          nextText: 21
        },
        {
          text: "Give up and find a table",
          nextText: 22
        }
      ]
    },
    {
      id: 21,
      text: "You try to swipe from pockets as you squeeze past people. Someone quickly turns around and smashes a glass on your face.",
      options: [
        {
          text: "Continue...",
          nextText: 998
        }
      ]
    },
    {
      id: 22,
      text: "You find a table to sit at, hoping you'll be served. A stout, pot-bellied dwarf hurries to you, jiggling as he waddles. ''Aye laddie, what'll ya have?'' he says with a hacking cough.",
      options: [
        {
          text: '"Get me a beer"',
          nextText: 24
        },
        {
          text: '"Ale."',
          nextText: 23
        }
      ]
    },
    {
      id: 23,
      text: "The dwarf turns and jabs towards a waitress' tray, grabbing you an ale. ''Here you are, an ale. I think''. He says, stumbling slightly. He takes his leave, quickly returning to the bar. You wonder how such a stumpy dwarf can pour drinks at the bar, considering it's taller than him.",
      options: [
        {
          text: "Continue..",
          nextText: 997
        }
      ]
    },
    {
      id: 24,
      text: "''Aye laddie, I'll tell ye what, we haven't had beer here for 3 years. The only brewery outside of the capital shut down. If ye ask around, everyone'll tell ya the same thing. Aye, the lass running the place went missing.'' You decide to ask about it, though really all you want is a drink.",
      options: [
        {
          text: '"What do you mean they went missing?"',
          nextText: 25
        }
      ]
    },
    {
      id: 25,
      text: "The dwarf looks dumfounded. He starts waving his massive hands around in front of him. ''Well, a dinnae ken. All ah know is one day she disappeared. If yer pure that interested, ask around. Anyhoo, A'll get you yer ale.'' He mutters in an even thicker accent as he walks away, towards the bar. A waitress swoops by and drops the drink off. You spot a miserable looking man sat at the other side of the tavern, facing the wall.",
      options: [
        {
          text: 'Approach the man',
          nextText: 26
        }
      ]
    },
    {
      id: 26,
      text: "Reluctantly, you make your way over to the stranger. The floor sticks to your shoes as you step and waitresses flutter around you with trays of drinks. As you approach the man turns to face you, revealing a grotesque gash on his face. He gestures you to take a seat opposite him. You pull out the stool as much as you can and squeeze yourself into the seat, back right against the wall. ''Another hound after the brewery are you?'' He says, spraying spit with every word.",
      options: [
        {
          text: "You wipe the man's drool off your face",
          nextText: 27
        }
      ]
    },
    {
      id: 27,
      text: "''The brewery?'' You ask, carefully. You lean back as far as you can against the wall in preparation for his response. ''The brewery! MY. BREWERY. My beautiful, wonderful beer brewery. A few years back, we were famous! Everyone from here to Embar city knows about my blooming brilliant bottles of blue beer! But no, this god-forsaken land took away my wife! The one person keeping the brewery together. I was the Beer Master and she... She was my Lager Lady...''",
      options: [
        {
          text: "Are you still looking for her?",
          nextText: 50
        },
        {
          text: "''That's too bad''",
          nextText: 28,
          setMusic: "Battle"
        }
      ]
    },
    {
      id: 28,
      text: "The Beer Master jolts up, his hands firmly placed on the table. He looks down at you, with an intensely angry look on his face. He lunges at you but you swiftly dodge, grabbing your weapon. ''I will make you REGRET talking about my missus like that'' he says, spitting at you.",
      options: [
        {
          text: "Punch",
          nextText: 29
        },
        {
          text: "Flip the table",
          nextText: 40,
          healthValue: -30
        },
        {
          text: "Slit his throat",
          requiredState: (currentState) => currentState.Rogue,
          nextText: 30,
          healthValue: -40
        },
        {
          text: "Break his jaw",
          requiredState: (currentState) => currentState.Warrior,
          nextText: 31
        },
        {
          text: "Cast a firebolt",
          requiredState: (currentState) => currentState.Mage,
          healthValue: -5,
          nextText: 32
        },
        {
          text: "Reason with him",
          requiredState: (currentState) => currentState.Archer,
          nextText: 35,
          setMusic: "Tavern"
        }
      ]
    },
    {
      id: 29,
      text: "You swing straight for the Beer Master's face in retaliation. He swiftly ducks and swings back at you, glass in hand.",
      options: [
        {
          text: "Continue...",
          nextText: 998
        }
      ]
    },
    {
      id: 30,
      text: "You immediately try to swipe the man's neck with your knife. Narrowly avoiding your attack, the man grabs the back of your head and slams it on the table.",
      options: [
        {
          text: "Continue...",
          nextText: 996
        }
      ]
    },
    {
      id: 31,
      text: "You swing straight for the Beer Master's face in retaliation. He swiftly ducks and swings back at you, glass in hand.",
      options: [
        {
          text: "Continue...",
          nextText: 998
        }
      ]
    },
    {
      id: 32,
      text: "You cast a small firebolt towards his face. He wobbles backwards, clutching his face.",
      options: [
        {
          text: "Cast a smokescreen",
          nextText: 33,
        },
        {
          text: "Whack with your wand",
          nextText: 34,
        },
        {
          text: "Flip the table",
          healthValue: -30,
          nextText: 40
        },
      ]
    },
    {
      id: 33,
      text: "You try to cast a smokescreen spell to hide you as you escape. A small puff of hazy fog emanates from your nose, like a puff of pipe-weed smoke. The man quickly recovers and retaliates, throwing a glass at your face.",
      options: [
        {
          text: "Continue...",
          healthValue: -50,
          nextText: 998
        }
      ]
    },
    {
      id: 34,
      text: "You wave your wand at him, in an attempt to hit the man. He snatches the wand off of you and drives it into your eye, knocking you out.",
      options: [
        {
          text: "Continue...",
          healthValue: -50,
          nextText: 996
        }
      ]
    },
    {
      id: 35,
      text: "''L-look, I really didn't mean anything by it'' you stammer. ''Like I'd really believe that.'' You carefully prepare yourself to fire your bow and arrow as fast as you can - just in case.",
      options: [
        {
          text: "Fire at him",
          nextText: 36,
        },
        {
          text: '"Are you still looking for her?"',
          nextText: 50
        }
      ]
    },
    {
      id: 40,
      text: "You use all your strength to flip the heavy oak table on it's side, catching the man's legs. He pushes you hard, slamming your back against the wall.",
      options: [
        {
          text: "Kick the table",
          nextText: 995
        },
        {
          text: "Push the man back",
          nextText: 995
        },
        {
          text: "Headbutt him",
          nextText: 41
        }
      ]
    },
    {
      id: 41,
      text: "You manage to get a headbutt in, and knock the man unconscious. Before you could even think, adventurers start running at you, beating you up.",
      options: [
        {
          text: "Continue...",
          healthValue: -100,
          nextText: 996,
        }
      ]
    },
    {
      id: 50,
      text: "''Yes! Of course I'm still looking for her! I know she's out there somewhere... somewhere.'' You sigh and take a breath, reluctant to speak. ''I'll help you search, if you'd like.'' The man's eyes light up. He thrusts towards you, excitedly. You take one more breath and finish your drink in one, letting out a gassy burp afterwards. You leave the pub and head towards the old brewery. As you head down the road on your first quest, you hear the dwarven barkeep in the distance yelling ''Oi! Ye haven't paid fer ye drink!''  ",
      options: [
        {
          text: "Continue",
          nextText: 51,
          setMusic: "Adventure"
        }
      ]
    },
    {
      id: 51,
      text: "The old brewery comes into vision. It looks old and crumbly, like it could fall to pieces any second. ''There's a cave system underneath the brewery. It's enormous, we used to use it for our water supply because a few streams and rivers flow underneath there. The entrance is up ahead. She could be down there, somewhere.'' The entrance to the cave is just up ahead and the brewery is to your right.",
      options: [
        {
          text: "Explore the brewery",
          nextText: 52
        },
        {
          text: "Explore the caves",
          nextText: 52
        }
      ]
    },
    {
      id: 52,
      text: "Your journey ends here. Thank you for playing the demo version! :D",
      options: [
        {
          text: "Start again",
          nextText: -1
        }
      ]
    },
    {
      id: 996,
      text: "You wake up, hands bound behind your back. Blood covers your garments. You're outside of the pub, tied to a chair. The barkeep is stood next to you by the side of the road. ''Aye laddie, ye shouldnae have done that. The guard'll be here any second now.'' The start of your journey has now become the end.",
      options: [
        {
          text: "Restart",
          nextText: -1
        }
      ]
    },
    {
      id: 997,
      text: "You take a few big swigs of your ale. It tastes off, like something's not quite right with it. Breathing becomes more and more difficult, as you start choking. You fall to the floor, going blue and gasping for air. A few seconds pass - and so do you. Start again?",
      options: [
        {
          text: "Restart",
          nextText: -1
        }
      ]
    },
    {
      id: 998,
      text: "You wake up, hands bound behind your back. Blood covers your garments and glass shines slightly from the sun. You're outside of the pub, tied to a chair. The barkeep is stood next to you by the side of the road, waiting for the guards. The start of your journey has now become the end.",
      options: [
        {
          text: "Restart",
          nextText: -1
        }
      ]
    },
    {
      id: 999,
      text: 'You have taken an unbearable amount of damage and have died. Would you like to start again?',
      options: [
        {
          text:"Restart",
          nextText: -1
        }
      ]
    },
    {
      id: 1000,
      text: "You head South through the desert to get to the coast. The barren wasteland is harsh, and you were not prepared for it's vicious nature. The sands have taken your life.",
      options: [
        {
          text: "Restart",
          nextText: -1
        }
      ]
    },
    {
      id: 2000,
      text: "You make your way west, deeper into the dark woodlands. Stumbling on every step, you make your way down a steep twisted path littered with branches, pinecones and mud. As you take your next step, the loud and sudden hoot of an owl frightens you. Your foot lands in a pool of mud, twisting right around as you fall forwards onto your face.",
      options: [
        {
          text: "Try to stand",
          nextText: 2001
        },
        {
          text: "Call for help",
          nextText: 2004
        }
      ]
    },
    {
      id: 2001,
      text: "You spread your arms out onto the floor, your hands flailing trying to grip anything. You drag yourself towards a tree. Your fingernails dig into the bark trying to pull you up. You finally slide up against the tree. Your foot is severely wounded, no weight can be put on it. As you rest for a moment against the tree, brushing yourself off, you start to hear a creak. Soon after, the tree that once supported you has started to wobble. It slowly starts to fall towards you.",
      options: [
        {
          text: "Jump",
          nextText: 2002
        },
        {
          text: "Hold the tree",
          nextText: 2003
        }
      ]
    },
    {
      id: 2002,
      text: "You jump without looking and dive directly into a hole. You land head first and break your neck. Your journey is over.",
      options: [
        {
          text: "Restart",
          nextText: -1
        }
      ]
    },
    {
      id: 2003,
      text: "The tree ignores the fly pushing against it and anything else in it's path - crashing down onto the earth crushing you on it's landing. You have died.",
      options: [
        {
          text: "Restart",
          nextText: -1
        }
      ]
    },
    {
      id: 2004,
      text: "You start to call from the top of your voice, begging anyone to help you. In-between screams, you start to hear movement. Rustling bushes, breathing, staring. You're sure someone's nearby. Breathing quickly becomes a dribbling snarl. In the corner of your eye you can see a Dire Wolf's grey fur and red eyes. The wolf pounces, ripping you to pieces. You have died.",
      options: [
        {
          text: "Restart",
          nextText: -1
        }
      ]
    }
  ]
  