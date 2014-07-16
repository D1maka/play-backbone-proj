package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import models.Topic;
import play.*;
import play.api.libs.json.JacksonJson;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

import java.util.List;

public class Application extends Controller {

    public static Result index() {
        return ok(test.render("Your new application is ready."));
    }

    public static Result getTopics() {
        List<Topic> topicsList = Topic.find.all();
        JsonNode topics = Json.toJson(Topic.find.all());

        return ok(topics);
    }

    public static Result newTopic() {
        return ok("Not implemented");
    }

    public static Result createNewTopic() {
        return ok("Not implemented");
    }

    public static Result topicPage(Long id) {
        return ok("Not implemented");
    }

    public static Result newComment(Long id) {
        return ok("Not implemented");
    }
}
