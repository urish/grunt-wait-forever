// grunt-wait v0.1.0 (C) 2013, Uri Shaked

module.exports = function(grunt) {
	return grunt.registerTask('wait-forever', 'Waits forever.', function() {
		grunt.log.write('Waiting forever...');
		this.async();
	});
};
