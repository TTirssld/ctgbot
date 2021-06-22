const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const prefix = require('./config.json');

client.on('ready', () => {
    console.log('Bot is up and running!');
    console.log(`Logged in as ${client.user.tag}`);
});
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}
client.on('message', async message => {
     if(!message.content.startsWith(config.prefix)) return;
   const args = message.content.substring(config.prefix.length).split(" ");
   const command = args.shift().toLowerCase()
   switch(command){
       case "ping":
       client.commands.get('ping').execute(client, message, args);
       break;
       case "avatar":
       client.commands.get('avatar').execute(client, message, args);
        break;
        case "embed":
        client.commands.get('embed').execute(client, message, args);
        break;
        case "kick":
        client.commands.get('kick').execute(client, message, args);
        break;
        case "ban":
        client.commands.get('ban').execute(client, message, args);
        break;
        case "unban":
        client.commands.get('unban').execute(client, message, args);
        break;
        case "ticket":
        client.commands.get('ticket').execute(client, message, args);
        break;
        case "close":
        client.commands.get('close').execute(client, message, args);
        break;
        case "snipe":
        client.commands.get('snipe').execute(client, message, args);
        break;
        case "clear":
        client.commands.get('clear').execute(client, message, args);
        break;
        case "joke":
        client.commands.get('joke').execute(client, message, args);
        break;
        case "nuke":
        client.commands.get('nuke').execute(client, message, args);
        break;
        case "lock":
        client.commands.get('lock').execute(client, message ,args);
        break;
        case "unlock":
        client.commands.get('unlock').execute(client, message, args);
        break;
        
        
   }
})

// Mute
client.on("message", message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;

  if(message.member.hasPermission("ADMINISTRATOR")){
    if(message.content.startsWith("+ban1")){
      let mention = message.mentions.members.first();

      if(mention == undefined){
        message.reply("Membre non ou mal mentionné");
      }
      else {
        if(mention.bannable){
          mention.ban();
          message.channel.send(mention.displayName + "a été banni avec succès");
        }
        else {
          message.reply("Imposible de bannir ce membre.");
        }
      }
    }
    else if(message.content.startsWith("+kick1")){
      let mention = message.mentions.members.first();

      if(mention == undefined){
        message.reply("Membre non ou mal mentionné");
      }
      else {
        if(mention.kickable){
          mention.kick();
          message.channel.send(mention.displayName + "a été kick avec succès");
        }
        else {
          message.reply("Impossible de kick ce membre")
        }
      
      }
    }
    else if(message.content.startsWith("+mute")){
      let mention = message.mentions.members.first();

      if (mention == undefined){
        message.reply("Member non ou mal mentionné.");
      }
      else {
        mention.roles.add("856952686150025266");
        message.channel.send(mention.displayName + "Mute avec succès");
      }
    }
    else if(message.content.startsWith("+unmute")){
      let mention = message.mentions.members.first();

      if(mention == undefined){
        message.reply("Membre non ou mal mentionné.");
      }
      else {
        mention.roles.remove("856952686150025266");
        message.channel.send(mention.displayName + " unmute avec succès");
      }
    }
  }


});






//Protect
client.on('guildMemberAdd', function(message) {
  member.guild.channels.cache.get('MY CHANNEL ID').send('Bienvenue**' + member.user.username + '**Nous sommes actuellement **' + member.guild.memberCount + '**Membres');
 });

client.on('guildMemberAdd', async member => {
  const channel = member.guild.channels.cache.get('853365185917091870');
  if (!channel) return;

  channel.send("Bienvenue**" + member.user.username + "**Nous sommes actuellement **" + member.guild.memberCount + "**Membres")
});

client.on("message", async messsage => {
  if (messsage.content.includes("discord.gg/") || messsage.content.includes("discordapp/invite") || messsage.content.includes("discord.io"))
  if (messsage.member.roles.cache.has("854824818994315275") || messsage.member.roles.cache.has("854824818994315275")){
    return
  }else{
    messsage.delete()
    messsage.reply("Tu n'a les droit de posté de liens discord dans ce serveur !")
  }
  
})

client.snipes = new Map();
client.on('messageDelete', function(message, channel){
client.snipes.set(message.channel.id,{
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
})
})
client.login(config.token);
