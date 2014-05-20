"use strict";

module.exports = function( grunt ) {

  // matchdep -> Remove a necessidade de usar o loadNpmTasks
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    // configuracoes das tarefas

    // Watch
    watch: {
      css: {
        files: [ '../assets/scss/**/*' ],
        tasks: [ 'compass' ]
      },
      js: {
        files: '../assets/js/**/*',
        tasks: [ 'uglify' ]
      }
    },

    // Compile scss
    compass: {
      dist: {
        options: {
          force: true,
          config: 'config.rb',
          outputStyle: 'compressed'
        }
      }
    },

    // Concat and minify javascripts
    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          '../build/js/app.min.js': [
            '../assets/js/app.js'
          ]
        }
      }
    },
  });

  // registrando tarefas
  grunt.registerTask( 'default', [ 'watch' ] );

};
