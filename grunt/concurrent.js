module.exports = {
	first: ['jshint:dev','uglify', 'compass:build'],
	second: ['connect','watch', 'compass:dev'],
	options: {
		logConcurrentOutput: true
	}
};