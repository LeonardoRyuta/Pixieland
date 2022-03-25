// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Discord = require('discord.js')
const { RichEmbed } = require("discord.js")
const bot = new Discord.Client();


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
