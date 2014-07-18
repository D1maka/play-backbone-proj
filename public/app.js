define([
    'jquery',
    'underscore',
    'backbone',
    'javascripts/views/TopicListView',
    'javascripts/collections/TopicCollection',
    'javascripts/routers/MainRouter'
    ], function($, _, Backbone, TopicListView, TopicCollection, MainRouter) {

        // return {
        //     View: TopicListView.getTopicListView()
        // };

        var initialize = function() {
        	MainRouter.initialize();
        };

        return {
        	initialize: initialize
        };
    });

