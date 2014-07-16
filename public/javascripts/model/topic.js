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
	url: "http://localhost:9000/topics",
});