/*
 * grunt-svgreindeer
 * https://github.com/bennyschudel/grunt-svgreindeer
 *
 * Copyright (c) 2014 Benny Schudel
 * Licensed under the MIT license.
 */

"use strict";

var SvgReindeer = require('svgreindeer');

var log = console.log;

module.exports = function(grunt) {

	grunt.registerMultiTask(
		'svgreindeer',
		'Renders SVG\'s to PNG\'s for a fallback in older IE\'s and email clients.',
		function() {

			var done = this.async();

			var options = this.options({
				verbose : false,
				scale   : 1,
				style   : null
			});

			(new SvgReindeer(options))
				.run()
					.then(function(rapport, data) {
						done();
					})
					.done();

	});

};
