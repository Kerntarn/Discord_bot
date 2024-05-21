const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		channel = client.channels.cache.get('830454617586139186');
		await channel.send('**Rlcraft Server is Running...**');
	},
};