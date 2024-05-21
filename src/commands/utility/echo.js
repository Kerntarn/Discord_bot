const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
	    .setName('echo')
	    .setDescription('Replies with your input!')
        // .addChannelOption(option =>
        //     option.setName('channel')
        //         .setDescription('The channel to echo into')
        //         .setRequired(true))
	    .addStringOption(option =>
		    option.setName('input')
			    .setDescription('The input to echo back')
                .setRequired(true)
                .addChoices(
                    { name:'funny', value:'You chose Funny'},
                    { name:'Moody', value:'You chose Moody'}))
        .addIntegerOption(option =>
            option.setName('count')
                .setDescription('time repeated of echo')
                .setMaxValue(5))
        // .addBooleanOption(option =>
        //     option.setName('ephemeral')
        //     .setDescription('ephemeral or not chooseeee'))
        ,
    async execute(interaction){
        const option = interaction.options
        const count = option.getInteger('count',false)
        if (count){
            await interaction.reply(`${option.getString('input', true)} `.repeat(count))
        }else{
            await interaction.reply(option.getString('input', true))
        }
        
        // await interaction.reply({content:option.getString('input', true), ephemeral:option.getBoolean('ephemeral', false)});
        // await interaction.followUp(option.getChannel('channel'));
    }
}
