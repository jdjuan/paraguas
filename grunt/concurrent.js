module.exports = {
	first: ['jshint:dev','uglify', 'compass:build', 'htmlmin'],
	second: ['connect','watch', 'compass:dev'],
	options: {
		logConcurrentOutput: true
	}
};