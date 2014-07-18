define([
	'jquery',
	'underscore',
	'backbone',
	'javascripts/views/TopicListView',
	'javascripts/views/NewTopicView'
	], function($, _, Backbone, TopicListView, NewTopicView) {
		var MainRouter = Backbone.Router.extend({
			routes: {
				'': 'index',
				'/topics': 'getTopicList',
				'/topics/new': 'newTopic',
				'/topics/:id': 'getTopic'
			},

			index: function() {
				var view = TopicListView.getTopicListView();
				view.setRouter(this);
				// view.set('router', this);
				view.render();
			},

			getTopicList: function() {
				var view = TopicListView.getTopicListView();
				view.render();
			},

			newTopic: function() {
				var view = NewTopicView.getNewTopicView();
				view.render();
			}
		});

		var initialize = function() {
			var router = new MainRouter();

			Backbone.history.start();
		}

		return {
			initialize: initialize
		};
	});