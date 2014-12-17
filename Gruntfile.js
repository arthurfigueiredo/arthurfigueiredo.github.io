module.exports = function(grunt) {

	var allCssFiles = [
		'assets/css/bootstrap.css',
		'assets/css/font-awesome.css', 
		'assets/css/animate.css', 
		'assets/css/styles.css',
		'assets/css/arthur.css'
	];

	var allJsFiles = [
		'assets/js/bootstrap.js',
		'assets/js/jquery.mousewheel.min.js',
		'assets/js/jquery.nicescroll.min.js',
		'assets/js/jquery.nicescroll.plus.js',
		'assets/js/waypoints.min.js',
		'assets/js/jquery.bxslider.min.js',
		'assets/js/placeholders.jquery.min.js',
		'assets/js/cross-browser.js',
		'assets/js/main.js'
	];

	grunt.initConfig({

		
		pkg: grunt.file.readJSON("package.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author %>\n" +
				" */\n"
		},

		// Lint definitions
		jshint: {
			files: ['assets/js/main.js'],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: allJsFiles,
				dest: "assets/dist/all.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		uncss: {
		  dist: {
		  	options: {
		  		ignore: [
		  		],
		  		stylesheets: allCssFiles
		  	},
		    files: {
		      'assets/dist/all.min.css': ['index.html']
		    }
		  }
		},
		cssmin: {
		  combine: {
		    files: {
		      'assets/dist/all.min.css': 'assets/dist/all.min.css'
		    }
		  },
			options: {
				banner: "<%= meta.banner %>"
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-uncss');

	grunt.registerTask("default", ["jshint", "uglify","uncss","cssmin"]);

};
