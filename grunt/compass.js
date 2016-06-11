module.exports = {
	options:{
		config: 'config.rb',
		force: true,
		environment: 'production',
	},
	dev:{
		options: {
			watch: true,
		}
	},
	build: {
		options: {
			watch: false,
		}
	}
};