module.exports = {
	options:{
		config: 'config.rb'
	},
	dev:{
		options: {
			watch: true,
			environment: "production"
		}
	},
	build: {
		options: {
			environment: "production"
		}
	}
};