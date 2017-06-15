/* 2017-5-1
* created by Frank-2
* */
import { Meteor } from 'meteor/meteor';

import Lessons from './models/lessons';
import Stats from './models/stats';

Meteor.startup(() => {
  // code to run on server at startup
    Meteor.methods({
        getAllLessons: function () {
            let lessonsList = Lessons.find({}, {sort: {course: 1}}).fetch();
            for(var i = 0; i < lessonsList.length; i++){
                let userId = Meteor.userId();
                let stats = Stats.findOne({student: userId, lesson: lessonsList[i].course}, {sort: {createdAt: -1, limit: 1}});
                if(stats){
                    lessonsList[i].accuracy = stats.accuracy;
                    lessonsList[i].wpm = stats.wpm;
                }else {
                    lessonsList[i].accuracy = 0;
                    lessonsList[i].wpm = 0;
                }
            }
            return lessonsList;
        },
        getOneLesson: function ({courseId}) {
            console.log(courseId);
            let lesson = Lessons.findOne({course: courseId});
            console.log(lesson);
            return lesson;
        },
        InsertStats: function (stats) {
            stats.createdAt = new Date();
            Stats.insert(stats);
        },
        getLatestStats: function ({student, lesson}) {
            let stats = Stats.findOne({student: student, lesson: lesson}, {sort: {createdAt: -1, limit: 1}});
            return stats;
        }
    })
});
