import { Command } from '../../classes/Command';

const videoUrl = 'https://cdn.discordapp.com/attachments/702091543514710027/878497688222584872/duck.gif';

export const command: Command = {
   name: 'aiicii',
   aliases: ['aici'],
   description: 'A command that posts a picture of aiicii 🥰',

   execute(message, args) {
      message.channel.send(videoUrl);
   }
};
