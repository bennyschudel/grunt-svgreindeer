# grunt-svgreindeer

> Grunt task for [svgreindeer](https://github.com/bennyschudel/grunt-svgreindeer).

Renders SVG's to PNG's for a fallback in older IE's and email clients.


## Getting started

install and save dependencies
```shell
npm install grunt-svgreindeer --save-dev
```

enable it in Gruntfile.js
```js
grunt.loadNpmTasks('grunt-svgreindeer');
```


## The "svgreindeer" task

### Overview
In your project's Gruntfile, add a section named `svgreindeer` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svgreindeer: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

Please check [svgreindeer.yml](https://github.com/bennyschudel/node-svgreindeer/blob/master/lib/svgreindeer.yml) for a list of available options.


## About

Feedback welcome! Contact me [@bennyschudel](https://github.com/bennyschudel) or follow me on [twitter](http://twitter.com/bennyschudel).


Copyright (c) 2014 Benny Schudel - [MIT-License](https://raw.github.com/bennyschudel/grunt-svgreindeer/master/LICENSE)