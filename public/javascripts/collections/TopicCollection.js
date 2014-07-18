define([
	'jquery',
	'underscore',
	'backbone',
	'javascripts/models/TopicModel'
	], function($, _, Backbone, TopicModel) {
		var TopicCollection = Backbone.Collection.extend({
            url: "/topics",
            model: TopicModel.getTopicModel()
        });

        return {
            getTopicCollection: function() {
                return new TopicCollection();
            }
        };
	}
);