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
          verbose : true,
          input_dir: './example/',
          output_dir: './_build/',
          scale: 2,
          style: '* { fill: chocolate; }',
        },
      },
    },

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('dev', ['svgreindeer:dev',]);

  grunt.registerTask('default', ['jshint', 'dev']);

};
