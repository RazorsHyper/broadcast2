const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-"


client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});











client.on('ready', () => {
client.user.setGame('BroadCast II -bc','https://www.twitch.tv/kemo355');
console.log('Logging into discord..');
console.log(`
By Ҝ€₥σ
`);

});







client.on('message', message => {
  if (message.author.id === client.user.id) return;
  if (message.guild) {
  let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
  if(message.content.split(' ')[0] == prefix + '-bc') {
  if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
  if (!args[1]) {
  return;
  }
    message.guild.members.forEach(m => {
        var bc = new Discord.RichEmbed()
        .addField('# | الرسالة ', args)
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
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله ${args}`)
.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
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
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});


client.login(process.env.BOT_TOKEN);//
