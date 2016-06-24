# grunt-wait-forever

> Makes grunt wait forever, useful for running HTTP server.

## Getting Started
This plugin requires Grunt 1.x

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-wait-forever --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wait-forever');
```

## The "wait-forever" task

This tasks requires no configuration. Call this task to make grunt wait forever. You will usually use it 
after running a `connect` task.

## Release History

* 2016-06-24, v0.2.0, grunt 1.0.0 support.
* 2013-10-16, v0.1.0, Initial release.
