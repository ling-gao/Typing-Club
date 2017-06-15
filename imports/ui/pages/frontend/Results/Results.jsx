/* 2017-5-16
 * created by Frank-2
 * */
import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import createHashHistory from 'history/createHashHistory';

const customHistory = createHashHistory();

//Home component
export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: [],
            totalAccuracy: 0,
            totalWpm: 0,
            totalSeconds: 0
        }
    }

    backToLists() {
        customHistory.push('/list');
    }

    nextLesson() {
        let lesson = parseInt(location.hash.split('results/')[1]) + 1;
        customHistory.push('/lesson/' + lesson);
    }

    componentWillMount() {
        let course = parseInt(location.hash.split('results/')[1]);
        Meteor.call('getOneLesson', {courseId : course}, function(err, response){
            if(err) {
                console.log(err);
            } else {
                this.setState({lesson: response});
            }
        }.bind(this));

        let userId = Meteor.userId();

        Meteor.call('getLatestStats', {student: userId, lesson: course}, function(err, response){
            if(err) {
                console.log(err);
            } else {
                this.setState({totalAccuracy: response.accuracy});
                this.setState({totalWpm: response.wpm});
                this.setState({totalSeconds: response.seconds});
            }
        }.bind(this));
    }

    componentDidMount() {
        if(Meteor.userId() == null){
            this.setState({totalAccuracy: window.localStorage.getItem("current_total_accuracy")});
            this.setState({totalWpm: window.localStorage.getItem("current_total_wpm")});
            this.setState({totalSeconds: window.localStorage.getItem("current_total_seconds")});
        }
    }

    render() {
        return (
            <div className="home-main-body">
                <div className="container results-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="results-title">Well done! Time to move on to the next lesson.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 score-panel">
                            <div className="col-md-6 r-scores r-border">
                                <h4 className="subtitle">Your Score</h4>
                                <p>
                                    <span className="number">{this.state.totalAccuracy}%</span>
                                    <span className="item">&nbsp;accuracy</span>
                                </p>
                                <p>
                                    <span className="number">{this.state.totalWpm}</span>
                                    <span className="item">&nbsp; WPM speed</span>
                                </p>
                                <p>
                                    <span className="number">{this.state.totalSeconds}</span>
                                    <span className="item">&nbsp;seconds</span>
                                </p>
                            </div>
                            <div className="col-md-6 r-scores">
                                <h4 className="subtitle">Requirements</h4>
                                <p>
                                    <span className="number">{this.state.lesson.min_accuracy}</span>
                                    <span className="item">&nbsp;accuracy</span>
                                </p>
                                <p>
                                    <span className="number">{this.state.lesson.min_wpm}</span>
                                    <span className="item">&nbsp; WPM speed</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 results-buttons">
                            <button onClick={this.backToLists} type="button" className="btn btn-default">Back to Lists</button>
                            <button onClick={this.nextLesson} type="button" className="btn btn-default">Next Lesson</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}