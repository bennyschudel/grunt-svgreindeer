/*
 * grunt-svgreindeer
 * https://github.com/bennyschudel/grunt-svgreindeer
 *
 * Copyright (c) 2014 Benny Schudel
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

      // svgreindeer configuration
    svgreindeer: {
      dev: {
        options: {
          scale: 2,
          style: '* { fill: chocolate; }',
          verbose : true,
        },
        files: [{
          src: ['example/**/*.svg'],
          dest: '_build/',
          base: 'example/',
        }],
      },
    },

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('dev', ['svgreindeer:dev',]);

  grunt.registerTask('default', ['jshint', 'dev']);

};
