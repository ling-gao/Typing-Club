import Lessons from '../models/lessons'

Meteor.startup(function () {
    // Global configuration
    Api = new Restivus({
        version: 'v1',
        useDefaultAuth: true,
        prettyJson: true
    });

    // Maps to: get /api/v1/lessons/list
    Api.addRoute('lessons', {authRequired: false}, {
        get: {
            action: function () {
                let lessonsList = Lessons.find({}, {sort: {course: 1}}).fetch();

                return {
                    statusCode: 200,
                    body: {status: "success", lessonsList: lessonsList}
                };
            }
        }
    });
});