const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://media.discordapp.net/attachments/842179790948925441/888551431974559755/image0.gif `)
    .setTitle(`404 Music 🎶 `)
    .setDescription(`
 ~~🎶~~ **Music Commands** ~~📻~~
 ╭ play / loop / lyrics / nowplaying 

  pause / queue / radio / remove 

  resume / search / shuffle / skip  

 ╰ skipto / stop / volume / filter
 ────────────────
 ~~🔰~~ **Info Commands** ~~📌~~
 ╭ Invite / prefix / uptime / support /about / ping ╰

 [404Support](https://discord.gg/K8SSqweuSH)
 [404Invite](https://discord.com/api/oauth2/authorize?client_id=807350534901071932&permissions=3537920&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#21468b");
   message.react("☑️")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
