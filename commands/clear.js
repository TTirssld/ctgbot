const Discord = require('discord.js');
module.exports = {
    name : 'clear',
    execute(client, message, args){
    let amount = message.content.split(' ').slice(1)
    if(amount.length == 0)return message.channel.send('Enter number of messages to delete')
    amount = parseInt(amount) + 1;
    if(!message.member.hasPermission('MANAGE_MESSAGES'))return message.channel.send("Vous avez besoin de l'autorisation MANAGE_MESSAGES pour exécuter cette commande")
    if(!message.guild.me.hasPermission('MANAGE_MESSAGES'))return message.channel.send("je n'ai pas la bonne autorisation")
    if(isNaN(amount))return message.channel.send("Ce n'est pas un nombre valide de messages à supprimer")
if(amount < 1 || amount >= 100)return message.channel.send('Le nombre de messages saisi ne peut pas être supprimé')
message.channel.bulkDelete(amount,true).catch(err =>{
    message.channel.send('ERROR')
})   
}
}

