
const Discord = require('discord.js')
module.exports = {
    name: 'snipe',
    execute(client, message, args){
        const msg = client.snipes.get(message.channel.id)
        if(!msg)return message.channel.send("Il n'y a pas de messages supprimés")
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author)
        .setDescription(msg.content)
        if(msg.image)embed.setImage(msg.image)
        message.channel.send(embed)
    }
}
