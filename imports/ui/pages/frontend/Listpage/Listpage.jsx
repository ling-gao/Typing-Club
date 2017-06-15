/* 2017-5-2
 * created by Frank-2
 * */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import createHashHistory from 'history/createHashHistory';

const customHistory = createHashHistory();

//Home component
export default class Listpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: []
        }
    }

    componentWillMount() {
        Meteor.call('getAllLessons', function(err, response){
           if(err) {
               console.log(err);
           } else {
               this.setState({lessons: response});
           }
        }.bind(this));
    }

    renderBoxs() {
        return this.state.lessons.map((lesson) => (
            <Link to={'/lesson/' + lesson.course}  key={lesson.course}>
                <div className="box">
                    <h3 className="margin-top-0 margin-bottom-0">{lesson.course}</h3>
                    <div className="box-home">
                    </div>
                    <p className="stats-title">
                        <span className="text-p-left"><strong>Accuracy:</strong> {lesson.accuracy}</span>
                        <span className="text-p-right"><strong>Wpm:</strong> {lesson.wpm}</span>
                    </p>
                    <h5 className="lesson-title">{lesson.title}</h5>
                </div>
            </Link>
        ));
    }

    render() {
        return (
            <div className="home-main-body">
                <div className="container list-container">
                    <div className="row">
                        <div className="box-container col-md-8">
                            {this.renderBoxs()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}