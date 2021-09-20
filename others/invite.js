const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["i"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setDescription(`

[404 here](https://discord.com/api/oauth2/authorize?client_id=807350534901071932&permissions=3537920&scope=bot) to invite the bot
`)

  
   .setColor("RANDOM");
   message.react("➕")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
