module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		concat:{
			js:{
				src: ['js/*.js', '!**/*.min.js', '!**/*.concat.js'],
				dest: 'js/app.concat.js',
			},
			css:{
				src: ['css/*.css', '!**/*.min.css', '!**/*.concat.css'],
				dest: 'css/app.concat.css',
			}
		},
		
		uglify:{
			js:{
				src: 'js/*.concat.js',
				dest: 'js/app.min.js'
			}
		},
		
		cssmin: {
			css: {
				src: 'css/*.concat.css',
				dest: 'css/app.min.css'
			}
		},
		
		watch: {
			js:{
				files: ['js/*.js', '!**/*.min.js', '!**/*.concat.js'],
				tasks: ['js']
			},
			css:{
				files: ['css/*.css', '!**/*.min.css', '!**/*.concat.css'],
				tasks: ['css']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('js', ['concat:js', 'uglify:js']);
	grunt.registerTask('css', ['concat:css', 'cssmin:css']);
};
