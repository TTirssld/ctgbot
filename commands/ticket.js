
const Discord = require('discord.js')
module.exports = {
    name: 'ticket',
    execute(client, message, args){
      const user = message.author.id;
    const name = "ticket-" + user;
    if(message.guild.channels.cache.find(ch => ch.name == name)){
        message.channel.send("Vous avez déjà ouvert un ticket")
    }else{
message.guild.channels.create(name).then((chan)=>{
chan.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
})
chan.updateOverwrite(user,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
})
message.channel.send("j'ai créé un ticket pour vous");
chan.send("Le support sera bientôt là").then((m)=>{
    m.pin()
})
})   
 }
    }
}