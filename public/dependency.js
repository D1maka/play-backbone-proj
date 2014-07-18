require.config({
	paths: {
		jquery: 'javascripts/lib/jquery-1.11.1',
		underscore: 'javascripts/lib/underscore',
		backbone: 'javascripts/lib/backbone',
		templates: 'javascripts/templates'
	}
});

require(['app'], function(App) {
	// var v = App.View;
	// v.render();
	App.initialize();
});