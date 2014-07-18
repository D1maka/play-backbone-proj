define([
    'jquery',
    'underscore',
    'backbone',
    'javascripts/views/TopicListView'
    ], function($, _, Backbone, TopicListView, TopicCollection) {

        return {
            View: TopicListView.getTopicListView()
        };
    });

