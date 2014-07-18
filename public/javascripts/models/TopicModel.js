define([
	'jquery', 
	'underscore', 
	'backbone'
	], function($, _, Backbone) {
		var Topic = Backbone.Model.extend({
            urlRoot: "/topics",

            defaults: {
                topicName: '',
                topicSubject: '',
                topicComment: ''
            },
            initialize: function() {
                this.creationDate = new Date();
            }
        });

        return {
        	getTopicModel: function() {
        	    return new Topic();
        	}
        };
	}
);

