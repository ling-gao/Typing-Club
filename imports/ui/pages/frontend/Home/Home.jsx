/* 2017-5-2
 * created by Frank-2
 * */
import React, {Component} from 'react';

import TypingSentence from '../../../shared/TypingSentences/TypingSentences.jsx';

//Home component
export default class Home extends Component {
    render() {
        return (
            <div className="home-main-body">
                <div className="middle-part-1 text-center">
                    <div className="middle-part-rocket-1">
                        <img src="img/rocket1.png"/>
                    </div>
                    <div className="action-part text-left">
                        <div className="title text-uppercase">
                            Learn to type rocket fast <br/>
                            with the <a>kepler</a> method&nbsp;
                            <div className="cursor-wait">&nbsp;</div>
                        </div>
                        <br/>
                        <div className="action">
                            <a className="btn btn-default navbar-btn">Start Learning</a>
                            &nbsp;&nbsp;OR&nbsp;&nbsp;
                            <a className="btn btn-default navbar-btn">Test your skills</a>
                        </div>
                    </div>
                    <div className="middle-part-blue-cloud"></div>
                    <div className="middle-part-white-cloud"></div>
                </div>

                <div className="middle-part-2 text-center">
                    <img className="planet margin-top-100" src="img/earth_1.png"/>

                    <h2>What is the Kepler Method?</h2>

                    <p>The kepler Method is a set of rues you have to follow when learning to type.</p>

                    <div className="rule rule-1 margin-top-40 padding-right-15 padding-left-15">
                        <div className="row">
                            <div className="col-md-2 text-right">
                                <img src="img/icon_1.png" width="60"/>
                            </div>
                            <div className="col-md-10">
                                <p className="text-left font-bold margin-bottom-0">RULE#1: Never EVER look at your
                                    keyboard</p>
                                <p className="text-left">
                                    Repeatedly moving your head from the screen to your keyboard hurts your neck and
                                    consume time.
                                    Your brain works by practice, so if you look at your keyboard when typing, you will
                                    always do so.
                                    By not looking at your keyboard, you teach your brain where the keys are and in time
                                    you will know.
                                    If you are having trouble keeping up with this rule cover the letters on keyboard
                                    with stickers or use
                                    blank keycaps like the kepler keyboard.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rule rule-2 margin-top-40 padding-right-15 padding-left-15">
                        <div className="row">
                            <div className="col-md-2 text-right">
                                <img src="img/icon_2.png" width="60"/>
                            </div>
                            <div className="col-md-10">
                                <p className="text-left font-bold margin-bottom-0">RULE#2: Use a 60% Keyboard</p>
                                <p className="text-left">
                                    Most modern keyboards are actually too big for your fingers to efficiently reach all
                                    keys without
                                    loosing considerable time.
                                    A 60% keyboard only has teh bare minimum number of keys : All letters, numbers and a
                                    few control keys.
                                    Access to less frequently used keys like functions key and navigation keys are set
                                    in a second layer
                                    that you can access with a Fn Key.
                                    This allows you to never have to move your fingers more than a few centimeters fro
                                    their rest position
                                    and be efficient in your typing.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rule rule-3 margin-top-40 padding-right-15 padding-left-15">
                        <div className="row">
                            <div className="col-md-2 text-right">
                                <img src="img/icon_3.png" width="60"/>
                            </div>
                            <div className="col-md-10">
                                <p className="text-left font-bold margin-bottom-0">RULE#3: Practice 10 minutes every
                                    day</p>
                                <p className="text-left">
                                    Going from typing with 2 fingers to using the full potential of your hands is going
                                    to take some time.
                                    Don't expect to be typing fluently in a day, we advise practicing 10 minutes every
                                    day until you feel
                                    comfortable enough to type with 10 fingers every time you have a keyboard
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="middle-part-3 text-center">
                    <img className="planet margin-top-100" src="img/planet2.png"/>

                    <h2>Try it, start typing</h2>

                    <p>The kepler Method is a set of rules you have to follow when learning to type.</p>


                    <TypingSentence sentence="The rules of Kepler Typing are to never look at your keyboard, use a 60% keyboard and to practice 10 minutes every day. Doing so, I will greatly increase my typing speed and lower my error rate." />
                </div>

                <div className="middle-part-4 text-center margin-top-40 padding-bottom-40">
                    <img className="planet margin-top-40" src="img/planet3.png"/>

                    <h2 className="color-white">Improve your typing skills</h2>

                    <p className="color-white width-50 inline-block">
                        As your follow typing lessons, you will start typing faster and make less and less mistakes.
                        After each lesson, a not from 0 to 5 is given to you based on hour speed and errors.
                        Don't worry if you get 0 in the first lessons, the more you practice, the better you wil get and star hitting 5 stars high scores!
                    </p>

                    <div className="rocket-container margin-top-40 padding-right-15 padding-left-15">
                        <div className = "row">
                            <div className="col-md-2 col-xs-4">
                                <img src="img/rocket_circle_1.png"/>
                            </div>
                            <div className="col-md-2 col-xs-4">
                                <img src="img/rocket_circle_2.png"/>
                            </div>
                            <div className="col-md-2 col-xs-4">
                                <img src="img/rocket_circle_3.png"/>
                            </div>
                            <div className="col-md-2 col-xs-4">
                                <img src="img/rocket_circle_4.png"/>
                            </div>
                            <div className="col-md-2 col-xs-4">
                                <img src="img/rocket_circle_5.png"/>
                            </div>
                            <div className="col-md-2 col-xs-4">
                                <img src="img/rocket_circle_6.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
