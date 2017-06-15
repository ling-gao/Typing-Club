/* 2017-5-15
 * created by Frank-1
 * */

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Lessons = new Mongo.Collection('lessons');

Lessons.schema = new SimpleSchema({
    course: {type: Number},
    title: {type: String},
    text: {type: String},
    min_accuracy: {type: Number},
    min_wpm: {type: String},
    created: {type: Date, defaultValue: Date().now},
});

Lessons._ensureIndex({course: 0}, {unique: 1});

/*initialize lessons document when meteor startup*/
Meteor.startup(() => {
    let lesson1 = {
        course: 1,
        title: "Sharks",
        text: "Sharks do not have a single bone in their bodies. Rather than bones, sharks have a skeleton made of cartilage.",
        min_accuracy: 90,
        min_wpm: 45
    };

    let lesson2 = {
        course: 2,
        title: "Cultural Diversity",
        text: "Cultural diversity is having different cultures respect each others differences. It could also mean the",
        min_accuracy: 90,
        min_wpm: 45
    };
    
    let lesson3 = {
        course: 3,
        title: "Biology",
        text: "Like all sciences, biology uses the scientific method. This means that biologists must be able to show",
        min_accuracy: 90,
        min_wpm: 45
    };

    Lessons.insert(lesson1, function(err) {
        if(err) {
            console.log(err);
        }
    });
    
    Lessons.insert(lesson2, function(err) {
        if(err) {
            console.log(err);
        }
    });
    
    Lessons.insert(lesson3, function(err) {
        if(err) {
            console.log(err);
        }
    });
});

export default Lessons