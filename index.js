const {Client, Attachment} = require('discord.js');
const client = new Client();

const cheerio = require('cheerio');

const request = require('request');

const token = 'NzE4NDY0NDU0ODIzNzcyMjcy.XtqeOQ.svqfpoYQRZvL7gSjgj_fejw0v3Q';

const PREFIX = "?";

var version = '1.0.1';
client.once('ready', () => {
    console.log('Ready!');


    client.on('message',message => {
        if (message.content === 'RSU'){
            message.channel.send('RSU is a squad from our Server and you get part of it by puting RSU in your name. It stands for Rape squad united');
        }


        client.on('message', message=>{
            let args = message.content.substring(PREFIX.length).split(" ");

            switch(args[0]){
            case 'ping':
            message.reply('pong');
            break; 

            }
        });
          


    

});




    
    
     
   
    
    //https://ih1.redbubble.net/image.711900744.0361/mp,550x550,gloss,ffffff,t.u5.jpg https://i.scdn.co/image/ab67706c0000da84a104c0ab236580d6cd3229fa

switch(args[0]){
    case 'flammenwerfer':
        Image(message);
        break;
        case 'website':
            message.channel.sendMessage('youtube.com/LOSt')
        break;
}});


funktion, image(flammenwerfer)

    var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + "hans get the flammenwerfer",
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
    /*jshint esversion: 6 */
    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

    console.log(urls);

    if (!urls.length) {

        return;
    }

    // Send result
    message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
});

client.login('NzE4NDY0NDU0ODIzNzcyMjcy.XtpQwQ.kqOaR2z1kzzboPlgWMYYrdgaVeo');




