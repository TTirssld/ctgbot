const Discord = require('discord.js');
module.exports = {
    name: 'unlock',
    execute(message, args , client){
        const role = message.guild.roles.cache.find(role => role.name === 'Membre')
        if (!message.member.hasPermission('ADMINISTRATOR')){
            (message.channel.send("Vous n'avez pas la bonne autorisation"))
            
        }
        message.channel.updateOverwrite(role,{ 'SEND_MESSAGES': true})
        message.channel.send(`**Successfully unlocked **${message.channel.name}**`)
    }
}