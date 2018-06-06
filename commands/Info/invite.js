const Discord = require('discord.js');
exports.run = (client, message) => {

    message.channel.send('Le lien est en mp')

        var PingEmbed = new Discord.RichEmbed()
.setColor("#689AFB")
.addField("Voici le lien pour m'ajouter", "https://discordapp.com/api/oauth2/authorize?client_id=451810440843100170&permissions=8&scope=bot")
.setFooter(`invite`).setTimestamp();

message.author.send(PingEmbed)

}
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['invitation'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'invite',
    description: 'Donne le lien pour m\'ajouter sur le serv de votre choix',
    usage: 'invite'
  };
