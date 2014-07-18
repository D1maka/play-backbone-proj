define([
	'jquery',
	'underscore',
	'backbone',
	'javascripts/models/TopicModel'
	], function($, _, Backbone, TopicModel) {
	    console.log(TopicModel.getTopicModel());

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