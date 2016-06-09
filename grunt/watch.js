module.exports = {
	scripts: {
		files: ['javascripts/*.js'],
		tasks: ['jshint:dev', 'uglify:dev'],
		options: {
			spawn: false
		},
	},
	livereload: {
		options: { livereload: true },
		files: ['stylesheets/*'],
	},
};