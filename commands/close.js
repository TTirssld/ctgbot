const Discord = require('discord.js');
module.exports = {
    name : 'close',
    execute(client, message, args){
if(!message.channel.name.startsWith("ticket-"))return message.channel.send("Ceci n'est pas un billet valide")
if(!message.member.hasPermission("MANAGE_CHANNELS"))return message.channel.send("Vous avez besoin de l'autorisation GESTION DES CANAUX pour utiliser cette commande")
message.channel.send("Êtes-vous sûr de vouloir fermer ce ticket ? « oui ». Sinon, il se fermera automatiquement dans les 10 secondes").then((m)=>{
    message.channel.awaitMessages(response => response.content == "oui",{
        max: 1,
        time: 10000,
        errors: ['time']
    }).then(()=>{
        message.channel.delete()
    }).catch(()=>{
        m.edit("Fermeture annulée")
    })
})
    }
}