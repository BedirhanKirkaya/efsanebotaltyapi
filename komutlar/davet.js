const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Asistan Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField("<a:canyoutalk:599402076031811629> Destek Sunucusu: ", `[TIKLA](https://discord.gg/2dYT2RZ)`)    
      .addField("<:qweas:601533383733936138> Botu Ekle: ", `[TIKLA](https://discordapp.com/oauth2/authorize?client_id=631793261371064325&scope=bot&permissions=268443710)`)  
      .addField("<a:qwe2:601533562356760586> Bot'a Oy Ver: ", `[TIKLA](https://discord.gg/)`) 
      .addField("<a:nyancat_big:601534081636761613> Website: ", `[TIKLA](https://javascript-bot-sign.glitch.me)`) 
  .setFooter(`${message.author.username} tarafından istendi. | © JavaScript Bot.  `, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucu'],
    permLevel: 0
  };

  exports.help = {
    name: 'davet',
    description: 'yardım',
    usage: 'davet'
  };
