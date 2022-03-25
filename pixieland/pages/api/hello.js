// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Discord = require('discord.js')
const { RichEmbed } = require("discord.js")
const bot = new Discord.Client();


export default function handler(req, res) {
  bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    eventListener()
    bot.user.setPresence({
        status: "online", 
    });
    bot.user.setActivity(`Afonso`, {
      type: "STREAMING",
  });
  });
  
  bot.login('OTU0MzE2MjIxNDY4MjUwMTQz.YjRWPQ.Ms9ISZGTmPwSxCF41y6HlEkd9tY');

  res.status(200).json({ name: 'John Doe' })
}
