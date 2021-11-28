const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const botToken = process.env.TOKEN;
console.log(botToken)
console.log(process.env.TOKEN);
client.login(botToken)

client.on('ready', ()=>{
    console.log("Ready")
})



client.on('message', async(msg)=>{
  if(msg.content === "/clearChannel"){
    await msg.channel.bulkDelete(100)
  }
  
  let channel = "912088395356971038"
  if( msg.author.lastMessageChannelID === channel && msg.content.includes("/getrole")){
    const role = msg.content.slice(9);
    const member = msg.mentions.members.first();
    if(role.includes("java") && !role.includes("javascript")){ //wants java
      const myRole = msg.guild.roles.cache.find(roleName => roleName.name === 'java');
      member.roles.add(myRole).catch(console.error);
  } 
  else if(role.includes("javascript")) {
    const myRole = msg.guild.roles.cache.find(roleName => roleName.name === 'javascript');
    member.roles.add(myRole).catch(console.error);
  }
  if(role.includes("swift")){
      const myRole = msg.guild.roles.cache.find(roleName => roleName.name === 'swift');
      member.roles.add(myRole).catch(console.error);
  }
  if(role.includes("python")){
    const myRole = msg.guild.roles.cache.find(roleName => roleName.name === 'python');
    member.roles.add(myRole).catch(console.error);
  }
  if(role.includes("c-cpp")){
    const myRole = msg.guild.roles.cache.find(roleName => roleName.name === 'c-cpp');
    member.roles.add(myRole).catch(console.error);
  }
  if(role.includes("csa")){
      const myRole = msg.guild.roles.cache.find(roleName => roleName.name === 'csa');
      member.roles.add(myRole).catch(console.error);
  }
  if(role.includes("csp")){
      const myRole = msg.guild.roles.cache.find(roleName => roleName.name === 'csp');
      member.roles.add(myRole).catch(console.error);
  }
  
     
  }    
})