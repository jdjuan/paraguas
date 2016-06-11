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
		files: ['build/**/*{css,js}','index.html','images/*.{jpg,png}'],
	},
};