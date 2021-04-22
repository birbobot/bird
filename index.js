const Commando = require ('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTUxNzM2OTA5NzI3MjY4ODc1.D11VQA.Vl7XDacdxsU9j3aK4BeleE_ciBU'
const prefix = "$"
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

global.servers = {};

bot.on('ready',function(){
    console.log("Online.");
})

const client = new CommandoClient({
	commandPrefix: '$',
	owner: '556028717617512469',
});

const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

client.setProvider(
    sqlite.open({ filename: 'database.db', driver: sqlite3.Database }).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);

bot.login(TOKEN);