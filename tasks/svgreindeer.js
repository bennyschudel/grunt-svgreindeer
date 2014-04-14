/*
 * grunt-svgreindeer
 * https://github.com/bennyschudel/grunt-svgreindeer
 *
 * Copyright (c) 2014 Benny Schudel
 * Licensed under the MIT license.
 */

"use strict";

var Q = require('q');

var SvgReindeer = require('svgreindeer');

var log = console.log;

module.exports = function(grunt) {

	grunt.registerMultiTask(
		'svgreindeer',
		'Renders SVG\'s to PNG\'s for a fallback in older IE\'s and email clients.',
		function() {

			var _this = this;
			var p     = Q();
			var done  = this.async();

			this.files.forEach(function(item) {

				var options = _this.options({
					verbose : false,
					scale   : 1,
					style   : null,
					input_src  : item.src,
					output_dir : item.dest,
					base_dir   : item.base || '',
				});

				p = p.then(function(data) {
					return (new SvgReindeer(options)).run();
				});

			});

			p.done(function() {
				done();
			});

	});

};
