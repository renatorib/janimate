module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      options: {
        banner: '/*! janimate <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/janimate.min.js': 'src/janimate.js'
        }
      }
    },
    copy: {
      dist: {
        src: 'src/janimate.js',
        dest: 'dist/janimate.js',
      },
    },
    release: {
      options: {
        additionalFiles: ['bower.json']
      }
    },
    watch: {
      files: ['src/janimate.js'],
      tasks: ['uglify:dist', 'copy:dist']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['uglify:dist', 'copy:dist']);

};
