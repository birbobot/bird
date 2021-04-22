const commando = require('discord.js-commando');

class BigDice extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rolldice',
            group: 'simple',
            memberName: 'rolldice',
            description: 'rolls a 100 sided dice'
        });
    }

    async run(message, args)
    {
        var diceRoll = Math.floor(Math.random() * 100) + 1;
        message.channel.send ("Your dice landed on " + diceRoll);
    }
}

module.exports = BigDice;