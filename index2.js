const {Client, Message} = require('discord.js');
const client = new Client();

const cheerio = require('cheerio');
const request = require('request');




const PREFIX = '?';

client.once('ready', () => {
    console.log('Ready!');
})

client.on('message', message => {
 
    let args = message.content.substring(PREFIX.length).split(" ");

   
 
    switch (args[0]) {
        case 'hans':
        image(message);
 
        break;
        case 'RSU':
        message.channel.send('RSU is a squad from our Server and you get part of it by puting RSU in your name. It stands for Rape squad united');
    break;
    }
   

});
 
function image(message){
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "Hans get ze flammenwerfer",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
 
 
 
 
 
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
 
 
 
 
 
 
 
 
}
 
client.login(process.env.token);