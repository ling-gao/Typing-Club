import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import TypingSentences from '../../../shared/TypingSentences/TypingSentences.jsx';
import createHashHistory from 'history/createHashHistory';

const customHistory = createHashHistory();

// Lesson Page - represents typing letters
export default class Lesson extends Component {
    constructor(props){
        super(props);
        this.state = {
            lesson: [],
            totalAccuracy: 0,
            totalWpm: 0
        }
    }

    componentWillMount() {
        let course = parseInt(location.hash.split('lesson/')[1]);
        Meteor.call('getOneLesson', {courseId : course}, function(err, response){
            if(err) {
                console.log(err);
            } else {
                if(response === undefined){
                    customHistory.push('/list');
                }else {
                    this.setState({lesson: response});
                }
            }
        }.bind(this));
    }

    render() {
        if(this.state.lesson.length != 0) {
            return (
                <div>
                    <div className="middle-part-3 text-center typing-letters">
                        <TypingSentences sentence={this.state.lesson.text} course={this.state.lesson.course} />
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className="middle-part-3 text-center typing-letters">
                    <TypingSentences sentence="Loading Now !" />
                </div>
            );
        }
    }
}
