define([
	'jquery',
	'underscore',
	'backbone',
    'text!templates/addNewCommentTemplate.html',
	'javascripts/models/CommentModel'
	], function($, _, Backbone, AddNewCommentTemplate, CommentModel) {
		var NewCommentView = Backbone.View.extend({
            el: "#content",
            model: CommentModel.getCommentModelObject(),
            router: {},

            initialize: function() {
            },

            events: {
                'click #submitCommentBtn' : 'addComment'
            },

            render: function() {
                var template = _.template(AddNewCommentTemplate);
                        that.$el.html(template);
            },

            addComment: function() {
                var that - this;

                this.model.set('topicId', this.topicId);
                this.model.set('commentText', $('#topicComment').val());
                this.model.set('commentDate', new Date());

                this.model.save(null, {
                    success: function() {
                        that.router.navigate('topics/' + topicId, true);
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
        	getNewCommentView: function() {
        	    return new NewCommentView();
        	}
        };
	}
);

