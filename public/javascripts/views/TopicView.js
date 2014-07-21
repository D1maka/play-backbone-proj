define([
	'jquery',
	'underscore',
	'backbone',
    'text!templates/topicTemplate.html',
	'javascripts/models/TopicModel'
	], function($, _, Backbone, topicTemplate, TopicModel) {
		var TopicView = Backbone.View.extend({
            el: "#content",
            model: {},
            router: {},
            topicId: 0,

            initialize: function() {
            },

            events: {
                
            },

            render: function() {
                this.model = TopicModel.getTopicModelObject();
                this.model.set({id: this.topicId});
                var that = this;
                console.log(this.model.id);
                this.model.fetch({
                    success: function(topics) {
                        var template = _.template(topicTemplate, {topic: that.model});
                        that.$el.html(template);
                    }
                });
            },

            setRouter: function(r) {
                this.router = r;
            }, 

            setTopicId: function(id) {
                this.topicId = id;
            }
        });

        return {
        	getTopicView: function() {
        	    return new TopicView();
        	}
        };
	}
);

