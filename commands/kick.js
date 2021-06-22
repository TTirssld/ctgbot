const Discord = require('discord.js');
module.exports = {
    name : 'kick',
    execute(client, message, args){
        let member = message.mentions.members.first()
        if(!member) return message.channel.send("Vous devez mentionner un membre pour le kick")
        let reason;
        let arg = message.content.split(" ").slice(2)
        if(arg.length == 0){
            reason = "No reason specified"
        }else{
            reason = arg.join(' ')
        }
        if(!message.member.hasPermission("KICK_MEMBERS"))return message.channel.send("Vous n'avez pas la bonne autorisation")
        if(!message.guild.member(member).kickable)return message.channel.send("Je ne peux pas expulser cet utilisateur")
    member.send(`Vous avez été expulsé  ${message.guild.name} Reason: ${reason}`).then(()=>{
        message.guild.member(member).kick()
    }).then(()=>{
        message.channel.send(`${member.user.tag} a été botté`)
    })
    }
}