define([
	'jquery',
	'underscore',
	'backbone',
	'javascripts/models/TopicModel',
	'text!templates/newTopicTemplate.html'
	], function($, _, Backbone, TopicModel, newTopicTemplate) {
			var NewTopicView = Backbone.View.extend({
				el: '#content',
				model: TopicModel.getTopicModel(),
				events: {
					// "click #"
				},

				initialize: function() {

				},

				events: {

				},

				render: function() {
					var template = _.template(newTopicTemplate);
				}
			});

			return {
				getNewTopicView: function() {
					return new NewTopicView();
				}
			}
	   }
	);