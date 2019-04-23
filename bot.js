const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?"


client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});











client.on('ready', () => {
client.user.setGame('BroadCast II By -Hyper.-#0001 ','https://www.twitch.tv/iturnikill/');
console.log('Logging into discord..');
console.log(`
By -Hyper.-#0001
`);

});







client.on('message', message => {
  if (message.author.id === client.user.id) return;
  if (message.guild) {
  let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
  if(message.content.split(' ')[0] == prefix + '?bc') {
  if(!message.channel.guild) return message.reply('**❌ Sorry but this is for the servers Only**');         
  if (!args[1]) {
  return;
  }
    message.guild.members.forEach(m => {
        var bc = new Discord.RichEmbed()
        .addField('# | The message ', args)
        .setThumbnail(message.guild.iconURL)
        .setColor('RANDOM')
        m.sendMessage(args)
    });
    const AziRo = new Discord.RichEmbed()   
    .setColor('RANDOM')
    message.channel.sendEmbed(AziRo);          
  }
  } else {
    return;
  }
  });






client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**This Command only for the servers only**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`Message content ${args}`)
.setDescription(`You have a minute to choose before you cancel the broadcast`)
if (!args) return message.reply('**You must type a word or phrase to send the broadcast**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(`:ballot_box_with_check: the massage has been sent🔊`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
  .setTitle('`-Broadcast-`')
.setAuthor(`Server : ${message.guild.name}`)
.setFooter(`Sender : ${message.author.username}`)
.setDescription(`Message : ${args}`)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: the message has been sent🔊`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});


client.login(process.env.BOT_TOKEN);//
