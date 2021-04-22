const commando = require('discord.js-commando');

class FunMirrorCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'avatar',
            group: 'simple',
            memberName: 'avatar',
            description: 'Looks at your reflection in a mirror.',
        });
    }

    async run(message, args)
    {
        message.channel.send("You look so beautiful!\n" + message.author.avatarURL)
    }
}

module.exports = FunMirrorCommand;