import { Message, MessageEmbed, MessageReaction, User } from 'discord.js';

import { ICommand } from '../../classes/Command';
import { embedColor, QuickEmbed } from '../../util/styleUtil';

const voteEmojis = [
    { name: 'one' },
    { name: 'two' },
    { name: 'three' },
    { name: 'four' },
    { name: 'five' },
    { name: 'six' },
    { name: 'seven' },
    { name: 'eight' },
    { name: 'nine' },
];

export const command: ICommand = {
    name: 'Vote',
    description: 'Create a strawpoll',
    usage: '[option1, option2, ...etc] [optional: -title]',
    aliases: ['strawpoll'],

    async execute(message, args) {
        let title = 'strawpoll';
        let options = args.join(' ').split(',');

        let votes: string[] = [];

        //find -title
        options.map((arg, pos) => {
            if (arg.includes('-title')) {
                title = arg.slice(7, arg.length);
                console.log(title);
            } else {
                votes.push(arg);
            }
        });

        const embed = new MessageEmbed().setTitle(title).setColor(embedColor);

        if (votes.length > 9) {
            return QuickEmbed(message, `max options 9`);
        }

        for (let i = 0; i < votes.length; i++) {
            let vote = votes[i];
            embed.addField(vote, `${i + 1}`, true);
        }

        //send the normal embed
        message.channel.send(embed).then(async msg => {
            // if (!((msg): msg is Message => msg instanceof Message)(msg)) return

            const filter = (reaction: MessageReaction, user: User) => {
                return !user.bot;
            };

            // const collector = msg.createReactionCollector(filter)
            // collector.on('collect', async reaction => {})

            for (let i = 0; i < votes.length; i++) {
                const emoji = msg.client.emojis.cache.find(emoji => emoji.name === voteEmojis[i].name);
                await msg.react(emoji.id);
            }
        });
    },
};
