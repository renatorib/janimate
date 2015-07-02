module.exports = function(grunt) {

  var filesConcat = [
    'src/js/factory.js',
    'src/js/lib/helpers.js',
    'src/js/lib/jSequence.js',
    'src/js/lib/jAnimate.js',
    'src/js/lib/extend.js',
    'src/js/lib/end.js'
  ];

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    today: grunt.template.today('yyyymmdd'),

    concat: {
      dist: {
        src: filesConcat,
        dest: 'dist/janimate.js'
      }
    },

    uglify: {
      options: {
        preserveComments: 'some'
      },
      dist: {
        src: 'dist/janimate.js',
        dest: 'dist/janimate.min.js'
      }
    },

    connect: {
      test: {
        options: {
          port: 9001,
          base: '.',
          keepalive: true,
          open: 'http://localhost:9001/test/test.html'
        },
      }
    },

    copy: {
      dist: {
        src: 'dist/janimate.js',
        dest: 'dist/janimate.js',
      }
    },

    release: {
      options: {
        additionalFiles: ['bower.json']
      }
    },

    watch: {
      files: ['src/**/*.js'],
      tasks: ['concat:dist', 'uglify:dist', 'copy:dist']
    },

    replace: {
      options: {
        prefix: '@',
        patterns: [{
          match: 'VERSION',
          replacement: '<%= pkg.version %>'
        }, {
          match: 'YEAR',
          replacement: (new Date()).getFullYear()
        }, {
          match: 'DATE',
          replacement: (new Date()).toISOString()
        }]
      },
      dist: {
        expand: true,
        flatten: true,
        src: ['dist/*.js', 'dist/*.css'],
        dest: 'dist'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-replace');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dist', ['concat:dist', 'uglify:dist', 'copy:dist', 'replace:dist']);
  grunt.registerTask('test', ['connect:test']);

};
