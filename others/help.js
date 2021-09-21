const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

 require("discord-buttons")(client)

 const buttons = new
Discord.MessageButton() 
.setStyle("url")
.setLabel("hi")
.setURL("https://discord.gg/K8SSqweuSH"


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 4,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://media.discordapp.net/attachments/842179790948925441/888551431974559755/image0.gif `)
    .setTitle(`**404 Music Bot 🎶** `)
    .setDescription(`
~~🎶~~ **Music Commands** ~~📻~~
** play / skip / stop / volume / skipto / search / filter / resume / shuffle / remove / radio / pause / queue / loop / lyrics / nowplaying **

────────────────
~~🔰~~ **Info Commands** ~~⚙️~~
**invite / prefix / uptime / support / about / ping / say / sug**

 [404Support](https://discord.gg/K8SSqweuSH)
 [404Invite](https://discord.com/api/oauth2/authorize?client_id=807350534901071932&permissions=3537920&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#21468b");
   message.react("☑️")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};


