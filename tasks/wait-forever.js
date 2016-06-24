// grunt-wait v0.2.0 (C) 2013, 2016, Uri Shaked

module.exports = function(grunt) {
	return grunt.registerTask('wait-forever', 'Waits forever.', function() {
		grunt.log.write('Waiting forever...');
		this.async();
	});
};
