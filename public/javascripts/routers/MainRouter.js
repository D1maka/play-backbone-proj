define([
	'jquery',
	'underscore',
	'backbone',
	'javascripts/views/TopicListView',
	'javascripts/views/NewTopicView',
	'javascripts/views/TopicView',
	'javascripts/views/NewCommentView'
	], function($, _, Backbone, TopicListView, NewTopicView, TopicView, NewCommentView) {
		var MainRouter = Backbone.Router.extend({
			routes: {
				'': 'index',
				'topics': 'getTopicList',
				'topics/new': 'newTopic',
				'topics/:id': 'getTopic'
			},

			index: function() {
				var view = TopicListView.getTopicListView();
				view.setRouter(this);
				view.render();
			},

			getTopicList: function() {
				var view = TopicListView.getTopicListView();
				view.render();
			},

			newTopic: function() {
				var view = NewTopicView.getNewTopicView();
				view.setRouter(this);
				view.render();
			},

			getTopic: function(id) {
				console.log(id);
				var view = TopicView.getTopicView();
				view.setRouter(this);
				view.setTopicId(id);
				view.render();

				var newCommentView = NewCommentView.getNewCommentView();
				newCommentView.setRouter(this);
				newCommentView.setTopicId(id);
				newCommentView.render();
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