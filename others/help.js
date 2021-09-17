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
    .setThumbnail(`https://media.discordapp.net/attachments/861399487233654834/872561176456884224/image0.png `)
    .setTitle(`**Random Help**`)
    .setDescription(`

 *Links**
 [Support](https://discord.gg/AkYA68Z2gG)
 [Invite](https://discord.com/api/oauth2/authorize?client_id=831212084271644733&permissions=8&scope=bot)
 [Website](https://randombotm.code.blog/)
 [Sponsored](https://discord.gg/K8SSqweuSH)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<a:emoji_182:860935836240314378>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
