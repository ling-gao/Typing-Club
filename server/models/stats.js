/* 2017-5-15
 * created by Frank-1
 * */

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Stats = new Mongo.Collection('stats');

Stats.schema = new SimpleSchema({
    student: {type: String},
    lesson: {type: Number},
    accuracy: {type: Number},
    wpm: {type: Number},
    seconds: {type: Number},
    createdAt: {type: Date, defaultValue: Date().now},
});

export default Stats