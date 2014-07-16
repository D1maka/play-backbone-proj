var TopicListView = Backbone.View.extend({
	render: function() {		
		var that = this;
		var topics = new TopicCollection();
		
		topics.fetch({
			success: function(topics) {				
				var template = _.template($(that.templateId).html(), {topics: topics.models});
				this.$el.html(template);
			}
		});
	}	
});