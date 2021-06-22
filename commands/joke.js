
const Discord = require('discord.js');
const customDiscordJokes = require('custom-discord-jokes');
module.exports = {
    name: 'joke',
    execute(client, message, args){
// To get a random dad joke
customDiscordJokes.getRandomDadJoke (function(joke) {
    //=> message.channel.send(joke)
});
 
// To get a random Chuck Norris joke
customDiscordJokes.getRandomCNJoke (function(joke) {
    //=>message.channel.send(joke)
});
 
// To get a customized joke
var fn = "Donald";
var ln = "Trump";
customDiscordJokes.getCustomJoke (fn, ln, function(joke) {
    //=> message.channel.send(joke)
});
 

    }
}
