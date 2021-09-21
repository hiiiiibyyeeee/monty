const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


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

const discord = require("discord.js");
const client = new discord.Client();
const discordButtons = require("discord-buttons-plugin");
const buttonClient = new discordButtons(client)


//ano
client.on("message", (message) => {
	if(message.content === "!ano") {
	 const embed = new discord.MessageEmbed()
	 .setTitle("Effect Sataff")
	 .setColor("RED");
 //ano
	 const button1 = new buttonClient.MessageButton()
	 .setLabel("Yes")
	 .setStyle("red") //color
	 .setID("yes")

	 const button2 = new buttonClient.MessageButton()
	 .setLabel("No")
	 .setStyle("red") //color
	 .setID("no")

   const button3 = new buttonClient.MessageButton()
   .setLabel("Follow me on Github")
   .setURL("https://github.com/ano404")

     
     buttonClient.send(null, { channel: message.channel.id, embed, buttons: [ [button1, button2], [button3] ]})
 }
})


buttonClient.on("yes", (inta) => inta.message.reply("Thnanks, i love you "))
buttonClient.on("no", (inta) => {
	inta.message.reply("WTF, shut up bitch")
})
//token 
client.login("ODA3MzUwNTM0OTAxMDcxOTMy.YB2txw.iHY4zfetlE95njVXiVHIVr2SNek") 
