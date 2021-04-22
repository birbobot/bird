const commando = require('discord.js-commando');

class DiceCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'dice',
            group: 'simple',
            memberName: 'dice',
            description: 'Rolls a dice. Die? Dice. I dont fucking know anymore.',
        });
    }

    async run(message, args)
    {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        message.channel.send("Your dice landed on " + diceRoll);
    }
}

module.exports = DiceCommand;