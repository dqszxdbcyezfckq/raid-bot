const chalk = require('chalk');
const Discord = require('discord.js');
const purplecolor = chalk.keyword('purple');

module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(purplecolor(`${client.user.username} en ligne. \n` + 'Connecté dans:\n' + client.guilds.array()));
 client.user.setActivity("<<help pour plus d'info")
  client.user.setAvatar("https://cdn.discordapp.com/attachments/451811903950553098/451817237674852373/Capture.PNG");
  /*
  client.user.setActivity(`${client.users.username} en modification`, {type: "WATCHING"});
  client.user.setStatus( 'idle' );
  */

};
