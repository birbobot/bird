const commando = require('discord.js-commando');

class CircusCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'circus',
            group: 'simple',
            memberName: 'circus',
            description: 'meme command',
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 1)
        if(chance == 0){
            message.channel.send("https://cdn.discordapp.com/attachments/589330444328108032/606359661670563880/image0.jpg");
        }
    }
}

module.exports = CircusCommand;