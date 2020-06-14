const ytdl = require('ytdl-core');
exports.run = async (client, message, args, ops) => {

    if (!message.member.voiceChannel) return message.channel.send('Go to a voice channel fucker');
    if(message.guild.me.voiceChannel) return message.Channel.send('Sry fucker im cheating on you in another channel');
    if (!args[0]) return message.channel.send('OI you need a URL FOR THIS SHIT');
    let validate = await ytdl.validateURL(args[0]);
    if (!validate) return message.channel.send('OI what is this url shit?This does not exist stoopid small brain');
    let info = await ytdl.getInfo(args[0]);
    let connection = await message.member.voiceChannel.join();
    let dispatcher = await connection.play(ytdl(args[0], {filter: 'audioonly'}));
    message.channel.send(`Now playing: ${info.title}`);

}