module.exports = {
	scripts: {
		files: ['javascripts/*.js'],
		tasks: ['jshint:dev', 'uglify'],
		options: {
			spawn: false,
			livereload: true
		},
	},
	livereload: {
		options: { livereload: true },
		files: ['index.html','images/**','build/stylesheets/*'],
	},
};