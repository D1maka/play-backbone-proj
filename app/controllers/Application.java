package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import models.Comment;
import models.Topic;
import play.*;
import play.api.libs.json.JacksonJson;
import play.data.Form;
import play.libs.F;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

import java.util.List;

public class Application extends Controller {

    public static Result index() {
        return ok(test.render("Your new application is ready."));
    }

    public static F.Promise<Result> getTopics() {
        F.Promise<List<Topic>> promisedTopics = F.Promise.promise(
                new F.Function0<List<Topic>>() {
                    @Override
                    public List<Topic> apply() throws Throwable {
                        List<Topic> topics =  Topic.find.all();
                        return topics;
                    }
                }
        );

        return promisedTopics.map(new F.Function<List<Topic>, Result>() {
            @Override
            public Result apply(List<Topic> topics) throws Throwable {
                return ok(Json.toJson(topics));
            }
        });
    }

    @BodyParser.Of(BodyParser.Json.class)
    public static Result newTopic() {
        return ok("Not implemented");
    }

    @BodyParser.Of(BodyParser.Json.class)
    public static F.Promise<Result> createNewTopic() {
        F.Promise<JsonNode> jsonPromise = F.Promise.promise(new F.Function0() {
            @Override
            public JsonNode apply() throws Throwable {
                JsonNode json = request().body().asJson();
                return json;
            }
        });

        return jsonPromise.map(new F.Function<JsonNode, Result>() {
            @Override
            public Result apply(JsonNode jsonNode) throws Throwable {
                Topic newTopic = Json.fromJson(jsonNode, Topic.class);
                Topic.store(newTopic);
                return redirect("/topics");
            }
        });
    }

    //Still TO DO
    public static F.Promise<Result> topicPage(final Long id) {
        F.Promise<Result> resultPromise = F.Promise.promise(new F.Function0<Result>() {
            @Override
            public Result apply() throws Throwable {
                Topic topicData = Topic.find.byId(id);

                return ok("Not implemented yet");
            }
        });
        return resultPromise;
    }

    public static Result newComment(Long id) {
        return ok("Not implemented");
    }
}
