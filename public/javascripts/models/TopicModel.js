define([
	'jquery', 
	'underscore', 
	'backbone'
	], function($, _, Backbone) {
		var Topic = Backbone.Model.extend({
            urlRoot: '/topics',

            defaults: {
                topicName: '',
                topicSubject: '',
                topicComment: '',
                creationDate: new Date()
            },
            initialize: function() {

            }
        });

        return {
        	getTopicModelClass: function() {
        	    return Topic;
        	},
            getTopicModelObject: function() {
                return new Topic();
            }
        };
	}
);

