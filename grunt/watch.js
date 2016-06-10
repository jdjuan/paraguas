module.exports = {
	scripts: {
		files: ['javascripts/*.js'],
		tasks: ['jshint:dev', 'uglify:dev'],
		options: {
			spawn: false
		},
	},
	html: {
		files: ['index.html'],
		tasks: ['htmlmin'],
		options: {
			spawn: false
		},
	},
	livereload: {
		options: { livereload: true },
		files: ['build/**/*{css,js,jpg,png,html}'],
	},
};