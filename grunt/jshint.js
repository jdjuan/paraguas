module.exports = {
	options:{
		// Outputs pretty results
		reporter: require('jshint-stylish'), 
		// Allows jQuery Globals
		jquery: true, 
		//Asume brower env variables
		browser: true, 
		//Prohibits the use of inline conditions or loops
		curly: true,
		//Requires strict equality operators
		eqeqeq: true, 
		//Avoid warnings when checking if a variable is null
		eqnull: true,
		//Prohibits the use of non-declared variables 
		undef: true, 
		//Prohibits the use of a variable before it was defined(Hoisting not allowed)
		latedef: true, 
		//Warning the unused variables and functions parameters
		unused: "strict",
	},
	dev:{
		src:['javascripts/*.js'],
		options: {
		//Allows alert and console.log which shouldn't be shipped to production
		devel: true, 
	}},
	build: {
		src:['javascripts/*.js'],
	}
};