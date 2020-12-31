module.exports = {
	name: 'q',
	description: 'Show q.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		
		function iterate(item) {
		message.channel.send(`Now playing: ${item.title}`);		
		}

		serverQueue.songs.forEach(iterate);
		
		return;
	},
};