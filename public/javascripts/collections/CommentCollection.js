define([
	'jquery',
	'underscore',
	'backbone',
	'javascripts/models/CommentModel'
	], function($, _, Backbone, CommentModel) {
		var CommentCollection = Backbone.Collection.extend({
            url: "/topics/comments",
            model: CommentModel.getCommentModelClass()
        });

        return {
            getCommentCollection: function() {
                return new CommentCollection();
            }
        };
	}
);