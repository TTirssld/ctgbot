const Discord = require('discord.js');
module.exports = {
    name: 'nuke',
    execute(client, message, args){
        const link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bZSle1XmET-H9Raq7HZA-7L5JH-zQnEeJKsCam2rcsZmjrLcs2nyTDds1hVNMqS11ck&usqp=CAU"
        if (!message.member.hasPermission('ADMINISTRATOR')){
            message.channel.send('missing permission')
        }

        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            channel.send('☢️ Channel nuked ☢️')
        })
        message.channel.delete()


    },
};


    

