const commando = require('discord.js-commando');


class testLootCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'scavenge',
            aliases: ['scav', 'scavange'],
            group: 'simple',
            memberName: 'scavenge',
            description: 'Loot!',
        });
    }

    async run(message, args)
    {
        const { getRandomNumber } = require('./functions.js')

const a = await getRandomNumber(1, 1, 100, false)

// Rarity
const chances = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4]
const chance = chances[a]

// Category, amt, diceroll numbers
const oneToFour = await getRandomNumber(3, 1, 5, true)
const b = oneToFour[0]

// Category
const categories = ["misc","food","meds","construct"]
const category = categories[b - 1]
// How many You get
const amount = oneToFour[1]

// Dice roll
const diceRoll = oneToFour[2]

// Start the hell of loops
if(chance === 1) { // Common
  if(category === "misc") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} piece(s) of small scrap metal!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received ${amount} newspaper(s)!`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received ${amount} roll(s) of duct tape!`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received ${amount} raggedy sheet(s)!`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received ${amount} 3 battery pack(s)`)
    }
  } else if(category === "food") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} can(s) of canned meat!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received ${amount} small watter bottle(s)!`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received ${amount} box(es) of cereal!`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received ${amount} pack(s) of crackers!`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received ${amount} can(s) of canned fruit!`)
    }
  } else if(category === "meds") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} small bandage(s)!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received ${amount} one-time use water filter(s)!`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received ${amount} sterile latex glove(s)!`)
    }
  } else if(category === "construct") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} stick(s)!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received ${amount} 3/3 bike frame(s)!`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received ${amount} assorted fastener(s)!`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received ${amount} 5 nail(s)!`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received ${amount} rusty pipe(s)!`)
    }
  }
} else if(chance === 2) { // Uncommon
  if(category === "misc") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} AA battery/batteries!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received ${amount} piece(s) of small scrap wood!`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received ${amount} match(es)!`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received ${amount} scissor blade(s)!`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received ${amount} small rope(s)!`)
    }
  } else if(category === "food") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} unopened soda can(s)!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received ${amount} 10oz container(s) of cooking rice!`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received ${amount} bottle(s) of cooking oil!`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received ${amount} pack(s) of beef jerky!`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received ${amount} medium water bottle(s)!`)
    }
  } else if(category === "meds") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} 1 morphine pill(s)!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received ${amount} medium bandage(s)!`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received ${amount} bottle(s) of 1/4-full rubbing alcohol!`)
    }
  } else if(category === "construct") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} 2/3 bike wheel(s)!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received ${amount} barbed wire(s)!`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received ${amount} piece(s) of medium scrap metal!`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received ${amount} crowbar(s)!`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received ${amount} screwdriver(s)!`)
    }
  }
} else if(chance === 3) { // Rare
  if(category === "misc") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} 3-time use lighter(s)!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received ${amount} piece(s) of large scrap wood!`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received ${amount} tarp(s)!`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received ${amount} car battery/batteries!`)
    }
  } else if(category === "food") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} large bottle(s) of water!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received ${amount} small lunchable(s)!`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received ${amount} energy bar(s)!`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received ${amount} small cookie(s) of Your choice!`)
    }
  } else if(category === "meds") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} large bandage(s)!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received ${amount} purifier tablet(s)!`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received ${amount} splint(s)!`)
    }
  } else if(category === "construct") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} piece(s) of large scrap metal!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received ${amount} 1/3 bike chain(s)!`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received ${amount} motor oil/grease WD-40(s)!`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received ${amount} saw(s)!`)
    }
  }
} else if(chance === 4) { // Impossible
  if(category === "misc") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} 1/2-full can(s) of gasoline!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received ${amount} empty 3 battery-operated radio(s)!`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received nothing! Better luck next time`)
    }
  } else if(category === "food") {
    if(diceRoll === 1) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received ${amount} gallon bottle(s) of water`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received ${amount} packets(s) of salt/sugar!`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received nothing! Better luck next time`)
    }
  } else if(category === "meds") {
    if(diceRoll === 1) {
      message.channel.send(`You received ${amount} 3 morphine pills!`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received ${amount} mini hand sanitizer(s)!`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received nothing! Better luck next time`)
    }
  } else if(category === "construct") {
    if(diceRoll === 1) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 2) {
      message.channel.send(`You received ${amount} fully-functional wagon(s)!`)
    } else if(diceRoll === 3) {
      message.channel.send(`You received nothing! Better luck next time`)
    } else if(diceRoll === 4) {
      message.channel.send(`You received ${amount} sledgehammer(s)!`)
    } else if(diceRoll === 5) {
      message.channel.send(`You received nothing! Better luck next time`)
    }
  }
} else {
  message.channel.send(`the command failed to properly run. Provide this information to Tavi\n> Variables: a:${a} | chance:${chance} | oneToFour:${oneToFour} | b:${b} | category:${category} | amount:${amount} | diceRoll:${diceRoll}\n> Test (5, 1, 100, true): ${getRandomNumber(5, 1, 100, true)}`)
}
    }
}

module.exports = testLootCommand;