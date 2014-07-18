define([
	'jquery',
	'underscore',
	'backbone',
    'text!templates/topicListTemplate.html',
	'javascripts/collections/TopicCollection'
	], function($, _, Backbone, topicListTemplate, TopicCollection) {
		var TopicListView = Backbone.View.extend({
            el: "#content",
            templateId: "#topicListTemplate",
            collection: TopicCollection.getTopicCollection(),
            router: {},

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
                        // var template = _.template($(that.templateId).html(), {topics: topics.models});
                        var template = _.template(topicListTemplate, {topics: topics.models});
                        that.$el.html(template);
                    }
                });
                // this.collection.reset();
            },

            newTopic: function() {
                console.log("hello");
                console.log(this.router);
                this.router.navigate('/topics', true);
            },

            setRouter: function(r) {
                this.router = r;
            }
        });

        return {
        	getTopicListView: function() {
        	    return new TopicListView();
        	}
        };
	}
);

