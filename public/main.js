var app = app || {};

(function ($) {

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

    var TopicCollection = Backbone.Collection.extend({
    	url: "/topics",
    	model: Topic
    });

    var TopicListView = Backbone.View.extend({
//        el: "#content",
//        templateId: "#topicListsTemplate",

        initialize: function() {
            this.collection = new TopicCollection();
        },

        events: {
            "click #newTopicBtn": "newTopic"
        },

    	render: function() {
    		var that = this;
    		console.log($(that.templateId));
    		this.collection.fetch({
    			success: function(topics) {
    				var template = _.template($(that.templateId).html(), {topics: topics.models});
    				that.$el.html(template);
    			}
    		});
    	},

    	newTopic: function() {

    	}
    });

    var t = new TopicListView({el: $("#content"), templateId: "#topicListsTemplate"});
    t.render();

})(jQuery);