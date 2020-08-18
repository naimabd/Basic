const express = require("express");
const app = express();
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

/////

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "*";

/////STREAMING 
client.on("ready", () => {
  client.user.setActivity(`${prefix}help`, {
    url: "https://www.twitch.tv/naimabdl",
    type: "STREAMING"
  });
});

/////

client.on("message", message => {
  if(message.content === `${prefix}help`){
    message.channel.send(`I don't have command.`)
    }
});

/////

client.login("Your bot token here");

///Good Luck.
