const Discord = require("discord.js")


module.exports = bot => {


    console.log(`${bot.user.username} is online`)
  /*   bot.user.setActivity("%help", {url:"https://www.twitch.tv/yoda", type:"WATCHING"}); */

    let statuses = [
        `Dominating ${bot.guilds.size} servers!`,
        "%help",
        `Over ${bot.users.size} users!`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status, {url:"https://www.twitch.tv/yoda", type:"WATCHING"});
    }, 5000)

}