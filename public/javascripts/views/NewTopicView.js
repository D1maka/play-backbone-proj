define([
	'jquery',
	'underscore',
	'backbone',
	'javascripts/models/TopicModel',
	'text!templates/newTopicTemplate.html'
	], function($, _, Backbone, TopicModel, newTopicTemplate) {
			var NewTopicView = Backbone.View.extend({
				el: '#content',
				model: TopicModel.getTopicModelObject(),
				router: {},

				events: {
					"click #submitBtn" : "createTopic",
					"click #cancelBtn" : "back"
				},

				initialize: function() {

				},

				render: function() {
					var template = _.template(newTopicTemplate);
					this.$el.html(template);
				},

				setRouter: function(r) {
                	this.router = r;
            	},

            	validate: function() {

            	},

            	createTopic: function() {
            		this.model.set('topicName', $('#topicName').val());
            		this.model.set('topicSubject', $('#topicSubject').val());
            		this.model.set('topicComment', $('#topicComment').val());

            		var that = this;

            		this.model.save(null, {
            			success: function() {
            				that.router.navigate('', true);
            			}
            		});
            	},

            	back: function() {
            		this.router.navigate('', true);
            	},

            	setRouter: function(r) {
                	this.router = r;
            	}
			});

			return {
				getNewTopicView: function() {
					return new NewTopicView();
				}
			}
	   }
	);