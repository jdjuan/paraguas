module.exports = {
	options:{
		config: 'config.rb'
	},
	dev:{
		options: {
			environment: "production"
		}
	},
	build: {
		options: {
			watch: true,
			environment: "production"
		}
	}
};