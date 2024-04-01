const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
	    .setName('echo')
	    .setDescription('Replies with your input!')
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to echo into')
                .setRequired(true))
	    .addStringOption(option =>
		    option.setName('input')
			    .setDescription('The input to echo back'))
        .addBooleanOption(option =>
            option.setName('ephemeral')
            .setDescription('ephemeral or not chooseeee')),
    async execute(interaction){
        const option = interaction.options
        await interaction.reply({content:option.getString('input', true), ephemeral:option.getBoolean('ephemeral', false)});
        await interaction.followUp(option.getChannel('channel'));
    }
}
