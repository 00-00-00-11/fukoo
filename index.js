const discordapp = require("discord.js");
const discord = new discordapp.Client();
const util = require("./util.js");


discord.on("ready",  () => {
    console.log("Bot is ready.");
    discord.user.setPresence({
        game:{
            name: "with spawning things..."
       





            
        }
    })
})

discord.on("message", message => {
   if (util.commandIs(message, "hello")){
       message.reply("Hello")
   }
   if (util.commandIs(message, "sp")){
   setInterval(async () => { await message.reply("cyberam test spam hehe");}, 10);
   }
   if (util.commandIs(message, "sp")){
    setInterval(async () => { await message.reply("codes from cyberam ");}, 10);
    }
       if(util.commandIs(message, "oko")){
        const oyun = [,
       `cyberam codes powers me! `];
       setInterval(async () => { await message.channel.send(oyun);}, 10);
       }  
       if(util.commandIs(message, "oko")){
        const oyun = [,
       `cyberam project re-served okokok`];
       setInterval(async () => { await message.channel.send(oyun);}, 20);
       }  
       if(util.commandIs(message, "oko")){
        const oyun = [,
       `cyberam oskoskoaskoaoskso `];
       setInterval(async () => { await message.channel.send(oyun);}, 21);
       } 
         if(util.commandIs(message, "oko")){
        const oyun = [,
       `cyberam provides best things for free `];
       setInterval(async () => { await message.channel.send(oyun);}, 12);
       }  
       if(util.commandIs(message, "oko")){
        const oyun = [,
       `p!info`];
       setInterval(async () => { await message.channel.send(oyun);}, 5);
       }  
       if(util.commandIs(message, "oko")){
        const oyun = [,
       `cyberam codes powers me! `];
       setInterval(async () => { await message.channel.send(oyun);}, 10);
       }  
       if(util.commandIs(message, "oko")){
        const oyun = [,
       `cyberam codes powers me! `];
       setInterval(async () => { await message.channel.send(oyun);}, 19);
       }  
       if(util.commandIs(message, "oko")){
        const oyun = [,
       `cyberam codes powers me! `];
       setInterval(async () => { await message.channel.send(oyun);}, 29);
       }  
       if(util.commandIs(message, "oko")){
        const oyun = [,
       `cyberam codes powers me! `];
       setInterval(async () => { await message.channel.send(oyun);}, 24);
       }  
       if(util.commandIs(message, "oko")){
        const oyun = [,
       `p!hint`];
       setInterval(async () => { await message.channel.send(oyun);}, 10);
        } 
});
discord.login("")
