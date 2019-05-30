require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

const fs = require('fs')
fs.readdir('./events',(err, files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`)
    })
})

fs.readdir('./events/',(err,files) => {
    files.forEach(file => {
      const eventHandler = require(`./events/${file}`)
      const eventName = file.split('.')[0]
      /* The code below will work if the event have only one parameter */
      //client.on(eventName,arg => eventHandler(client,arg))
  
      /* To tacle the breach of the code above, we must use the spreed operator 
          to get any number of parameter
          See the code below
      */
      client.on(eventName, (...args) => eventHandler(client, ...args))
    })
  })


client.login(process.env.BOT_TOKEN)

//trying to solve port access problem
require('http').createServer().listen()