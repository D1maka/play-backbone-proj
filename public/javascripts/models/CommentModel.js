define([
	'jquery', 
	'underscore', 
	'backbone'
	], function($, _, Backbone) {
		var Comment = Backbone.Model.extend({
            urlRoot: "/topics/comments",

            defaults: {
                topicId: 0,
                commentText: '',
                commentDate: new Date()
            },
            initialize: function() {

            }
        });

        return {
        	getCommentModelClass: function() {
        	    return Comment;
        	},
            getCommentModelObject: function() {
                return new Comment();
            }
        };
	}
);

