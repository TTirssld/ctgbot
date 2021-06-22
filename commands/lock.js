const Discord = require('discord.js');
module.exports = {
    name: 'lock',
    execute(client, message, args){
        const role2 = message.guild.roles.cache.find(role => role.name ==='Membre')
        if (!message.member.hasPermission('ADMINISTRATOR')){
            (message.channel.send("Vous n'avez pas la bonne autorisation"))
        }
        message.channel.updateOverwrite(role2,{ 'SEND_MESSAGES': false })
        message.channel.send(`**Successfully locked **${message.channel.name}**`)
    }
}