const Discord = require('discord.js');
module.exports = {
    name : 'unban',
    execute(client, message, args){
       if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("You dont have permission to perform this command!")
    if(isNaN(args[0])) return message.channel.send("Vous devez fournir une pièce d'identité.")
    let bannedMember =  client.users.fetch(args[0])
        if(!bannedMember) return message.channel.send("Veuillez fournir un identifiant d'utilisateur pour annuler le bannissement de quelqu'un")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send("Je n'ai pas la permission d'exécuter cette commande !")|
    message.delete()
    try {
        message.guild.members.unban(bannedMember, reason)
        message.channel.send(`**${bannedMember.tag}** n'est plus banni de la guilde !`)
    } catch(e) {
        console.log(e.message)
    }
}
}