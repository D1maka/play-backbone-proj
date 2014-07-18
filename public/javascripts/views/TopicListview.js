define([
	'jquery',
	'underscore',
	'backbone',
	'javascripts/collections/TopicCollection'
	], function($, _, Backbone, TopicCollection) {
		var TopicListView = Backbone.View.extend({
            el: "#content",
            templateId: "#topicListsTemplate",
            collection: TopicCollection.getTopicCollection(),

            initialize: function() {
//                this.collection = TopicCollection.getTopicCollection();
            },

            events: {
                "click #newTopicBtn": "newTopic"
            },

            render: function() {
                var that = this;
                this.collection.fetch({
                    success: function(topics) {
                        var template = _.template($(that.templateId).html(), {topics: topics.models});
                        that.$el.html(template);
                    }
                });
            },

            newTopic: function() {
                console.log("hello");
            }
        });

        return {
        	getTopicListView: function() {
        	    return new TopicListView();
        	}
        };
	}
);

