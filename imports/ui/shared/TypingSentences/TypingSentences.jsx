/*2017/5/4
* Created By Frank-2
* */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import createHashHistory from 'history/createHashHistory';

import Letter from '../TypingLetter/TypingLetter.jsx';
import Keyboard from '../Keyboard/Keyboard.jsx';
import KEYMAPS from '../../helpers/KeyMaps.jsx'

// Typing Sentence Component
const customHistory = createHashHistory();
export default class TypingSentences extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sentence: this.props.sentence, //whole sentence from parent component
            passedBefore: [], //Array of 0 and 1 if user first typed correct or wrong
            passedAfter: [], //Array of 0 and 1 if user lastly typed correct or wrong
            startIndex: 0, //The current index value how many letters user typed
            typedKeyboard: '', //From 0-9, a-z value that typed by user
            keyboardShiftPressed: false, //The previous status if the shift button pressed
            typedCurrentKeyboard: '',
            typedCurrentKeyboardStatus: '',
            totalSeconds: 0, //Total seconds after start typing
            totalWpm: 0, //WPM speed value
            totalAccuracy: 0,  //Accuracy Value
            isLeftShift: false //Save previous shift status if left or right
        };
        this.onKeyDown = this.onKeyDown.bind(this);
        this.myTimer = this.myTimer.bind(this);
        this.startCheckSpeed = this.startCheckSpeed.bind(this);
        this.checkAccuracyAndWpm = this.checkAccuracyAndWpm.bind(this);
    }

    componentWillMount() {
        document.addEventListener("keydown", this.onKeyDown);
    }

    componentDidMount() {
        var event = {"keyCode" : 1001};
        this.setKeyBoard(event);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown);
    }
    /*Find valid Key*/
    findValidKey(key, keyCode) {
        for(var i=0; i<= KEYMAPS.VALID_KEY_MAPS.length; i++){
            if(KEYMAPS.VALID_KEY_MAPS[i] == key)
                return 1;
        }
        //check If backSlash
        if(keyCode == 220)
            return 1;
    }
    
    checkIfLeftHandKey(key) {
        var isLeft = false;
        for(var i=0; i<= KEYMAPS.LEFTHAND_KEY_MAPS.length; i++){
            if(KEYMAPS.LEFTHAND_KEY_MAPS[i] == key)
                isLeft = true;
        }
        return isLeft;
    }

    changeLetterType(index, className) {
        itemId = "text_" + index;
        object = document.getElementById(itemId);
        object.className = className;
    }

    changeKeyboard(objId, shiftPressed, classChangeName) {
        if(this.state.typedKeyboard)
             if(objId != "shift-right" && objId != "shift-left")
                this.releaseTypedKeyboard(this.state.typedKeyboard, classChangeName);
        if(objId != undefined) {
            /*keyboard change*/
            var className = document.getElementById(objId).getAttribute('class');
            document.getElementById(objId).setAttribute('class', className + ' ' + classChangeName);
            /*keyboard text*/
            textId = "text-" + objId;
            var className = document.getElementById(textId).getAttribute('class');
            document.getElementById(textId).setAttribute('class', className + ' ' + classChangeName);

            textIdUp = "text-" + objId + "-up";
            if(document.getElementById(textIdUp) !== null) {
                var className = document.getElementById(textIdUp).getAttribute('class');
                document.getElementById(textIdUp).setAttribute('class', className + ' ' + classChangeName);
            }
        }


        if(objId != "shift-right" && objId != "shift-left") {
            this.setState({typedKeyboard: objId});
        }

        if(this.state.keyboardShiftPressed && objId != "shift-right" && objId != "shift-left") {
            this.releaseTypedKeyboard("shift-right", classChangeName);
            this.releaseTypedKeyboard("shift-left", classChangeName);
        }

        if(shiftPressed) {
            this.setState({keyboardShiftPressed: true});
        } else {
            this.setState({keyboardShiftPressed: false});
        }
    }
    
    changeFingersMap(keyValue, objId, shiftPressed) {
        var isLeft = this.checkIfLeftHandKey(keyValue);
        /*Release changed fingers*/
        if(this.state.typedKeyboard) {
            /*Hide previous typed fingers*/
            var prevId = "finger-" + this.state.typedKeyboard;
            var className = document.getElementById(prevId).getAttribute('class');
            document.getElementById(prevId).setAttribute('class', className + ' hidden');
        }
        /*Hide previous typed Shifts*/
        if(this.state.keyboardShiftPressed) {
            if(this.state.isLeftShift) {
                var shiftClassName = document.getElementById("finger-left-shift").getAttribute('class');
                document.getElementById("finger-left-shift").setAttribute('class', shiftClassName + ' hidden');
            }else {
                var shiftClassName = document.getElementById("finger-right-shift").getAttribute('class');
                document.getElementById("finger-right-shift").setAttribute('class', shiftClassName + ' hidden');
            }
        }else {
            if(document.getElementById("finger-j") !== null) {
                var shiftClassName = document.getElementById("finger-j").getAttribute('class');
                document.getElementById("finger-j").setAttribute('class', shiftClassName + ' hidden');
            }
            if(document.getElementById("finger-a") !== null){
                var shiftClassName = document.getElementById("finger-a").getAttribute('class');
                document.getElementById("finger-a").setAttribute('class', shiftClassName + ' hidden');
            }
        }
        /*Fingers change*/
        if(objId == null)
            objId = "a";
        var fingerId = "finger-" + objId;
        var curClassName = document.getElementById(fingerId).getAttribute('class');
        var oldClassName = curClassName.split(' hidden')[0];
        document.getElementById(fingerId).setAttribute('class', oldClassName);
        /*Set right and left shift button fingers movement*/
        if(shiftPressed) {
            if(isLeft) {
                var curClassName = document.getElementById("finger-right-shift").getAttribute('class');
                var oldClassName = curClassName.split(' hidden')[0];
                document.getElementById("finger-right-shift").setAttribute('class', oldClassName);
                //Save previous shift status
                this.setState({isLeftShift : false});
            }else {
                var curClassName = document.getElementById("finger-left-shift").getAttribute('class');
                var oldClassName = curClassName.split(' hidden')[0];
                document.getElementById("finger-left-shift").setAttribute('class', oldClassName);
                this.setState({isLeftShift : true});
            }
        }else {
            if(isLeft) {
                var curClassName = document.getElementById("finger-j").getAttribute('class');
                var oldClassName = curClassName.split(' hidden')[0];
                document.getElementById("finger-j").setAttribute('class', oldClassName);
            }else {
                var curClassName = document.getElementById("finger-a").getAttribute('class');
                var oldClassName = curClassName.split(' hidden')[0];
                document.getElementById("finger-a").setAttribute('class', oldClassName);
            }
        }
    }

    changeCurrentKeyboard(objId, shiftPressed, classChangeName) {
        if(objId != "shift-right" && objId != "shift-left") {
            if(this.state.typedCurrentKeyboard) {
                var typedId = this.state.typedCurrentKeyboard;
                var curClassName = document.getElementById(this.state.typedCurrentKeyboard).getAttribute('class');
                var oldClassName = curClassName.split(' ' + this.state.typedCurrentKeyboardStatus)[0];
                document.getElementById(typedId).setAttribute('class', oldClassName);

                /*keyboard text release*/
                textId = "text-" + this.state.typedCurrentKeyboard;
                var curClassName = document.getElementById(textId).getAttribute('class');
                var oldClassName = curClassName.split(' ' + this.state.typedCurrentKeyboardStatus)[0];
                document.getElementById(textId).setAttribute('class', oldClassName);

                textIdUp = "text-" + this.state.typedCurrentKeyboard + "-up";
                if(document.getElementById(textIdUp) !== null) {
                    var curClassName = document.getElementById(textIdUp).getAttribute('class');
                    var oldClassName = curClassName.split(' ' + this.state.typedCurrentKeyboardStatus)[0];
                    document.getElementById(textIdUp).setAttribute('class', oldClassName);
                }
            }

            if(objId != undefined) {
                /*keyboard change*/
                var className = document.getElementById(objId).getAttribute('class');
                document.getElementById(objId).setAttribute('class', className + ' ' + classChangeName);
                /*keyboard text*/
                textId = "text-" + objId;
                var className = document.getElementById(textId).getAttribute('class');
                document.getElementById(textId).setAttribute('class', className + ' ' + classChangeName);

                textIdUp = "text-" + objId + "-up";
                if(document.getElementById(textIdUp) !== null) {
                    var className = document.getElementById(textIdUp).getAttribute('class');
                    document.getElementById(textIdUp).setAttribute('class', className + ' ' + classChangeName);
                }

                window.localStorage.setItem("current_pressed_key_id", objId);
                window.localStorage.setItem("current_pressed_key_class", classChangeName);

                this.setState({typedCurrentKeyboard: objId});
                this.setState({typedCurrentKeyboardStatus: classChangeName});
            }

            /*release targets again after 50mms*/
            setTimeout(function(){
                var storedId = window.localStorage.getItem("current_pressed_key_id");
                var storedClassName = window.localStorage.getItem("current_pressed_key_class");
                var curClassName = document.getElementById(storedId).getAttribute('class');
                var oldClassName = curClassName.split(' ' + storedClassName)[0];
                document.getElementById(storedId).setAttribute('class', oldClassName);

                /*keyboard text release*/
                textId = "text-" + storedId;
                var curClassName = document.getElementById(textId).getAttribute('class');
                var oldClassName = curClassName.split(' ' + classChangeName)[0];
                document.getElementById(textId).setAttribute('class', oldClassName);

                textIdUp = "text-" + storedId + "-up";
                if(document.getElementById(textIdUp) !== null) {
                    var curClassName = document.getElementById(textIdUp).getAttribute('class');
                    var oldClassName = curClassName.split(' ' + classChangeName)[0];
                    document.getElementById(textIdUp).setAttribute('class', oldClassName);
                }
            }, 500);
        }
    }


    releaseTypedKeyboard(objId, type) {
        /*keyboard release*/
        var curClassName = document.getElementById(objId).getAttribute('class');
        var oldClassName = curClassName.split(' ' + type)[0];
        document.getElementById(objId).setAttribute('class', oldClassName);

        /*keyboard text release*/
        textId = "text-" + objId;
        var curClassName = document.getElementById(textId).getAttribute('class');
        var oldClassName = curClassName.split(' ' + type)[0];
        document.getElementById(textId).setAttribute('class', oldClassName);

        textIdUp = "text-" + objId + "-up";
        if(document.getElementById(textIdUp) !== null) {
            var curClassName = document.getElementById(textIdUp).getAttribute('class');
            var oldClassName = curClassName.split(' ' + type)[0];
            document.getElementById(textIdUp).setAttribute('class', oldClassName);
        }
    }

    isCharacterAndNum(text) {
        var regex =  /[a-zA-Z]/;
        return regex.test(text);
    }

    isUpperCharacter(text) {
        var regex =  /[A-Z]/;
        return regex.test(text);
    }

    setKeyBoard(event) {
        var index = this.state.startIndex;

        var forwardKey;

        if(event.keyCode == 8) {
            forwardKey = this.state.sentence[index];
        } else if(event.keyCode != 1001){
            forwardKey = this.state.sentence[index + 1];
        }

        if(event.keyCode == 1001) {
            forwardKey = this.state.sentence[0];
        }

        /*check input value is number or character*/
        if(this.isCharacterAndNum(forwardKey)) {
            if(this.isUpperCharacter(forwardKey)) {
                var convertedLetter = forwardKey.toLowerCase();
                this.changeFingersMap(forwardKey, convertedLetter, true);
                this.changeKeyboard(convertedLetter, true, "active");

                if(this.checkIfLeftHandKey(forwardKey)) {
                    this.changeKeyboard("shift-right", true, "active");
                } else {
                    this.changeKeyboard("shift-left", true, "active");
                }
            } else {
                this.changeFingersMap(forwardKey, forwardKey, false);
                this.changeKeyboard(forwardKey, false, "active");
            }
        } else {
            if(forwardKey == " ") {
                this.changeFingersMap(forwardKey, "space", false);
                this.changeKeyboard("space", false, "active");
            } else if(forwardKey == "1") {
                this.changeFingersMap(forwardKey, "key-1", false);
                this.changeKeyboard("key-1", false, "active");
            } else if(forwardKey == "2") {
                this.changeFingersMap(forwardKey, "key-2", false);
                this.changeKeyboard("key-2", false, "active");
            } else if(forwardKey == "3") {
                this.changeFingersMap(forwardKey, "key-3", false);
                this.changeKeyboard("key-3", false, "active");
            } else if(forwardKey == "4") {
                this.changeFingersMap(forwardKey, "key-4", false);
                this.changeKeyboard("key-4", false, "active");
            } else if(forwardKey == "5") {
                this.changeFingersMap(forwardKey, "key-5", false);
                this.changeKeyboard("key-5", false, "active");
            } else if(forwardKey == "6") {
                this.changeFingersMap(forwardKey, "key-6", false);
                this.changeKeyboard("key-6", false, "active");
            } else if(forwardKey == "7") {
                this.changeFingersMap(forwardKey, "key-7", false);
                this.changeKeyboard("key-7", false, "active");
            } else if(forwardKey == "8") {
                this.changeFingersMap(forwardKey, "key-8", false);
                this.changeKeyboard("key-8", false, "active");
            } else if(forwardKey == "9") {
                this.changeFingersMap(forwardKey, "key-9", false);
                this.changeKeyboard("key-9", false, "active");
            } else if(forwardKey == "0") {
                this.changeFingersMap(forwardKey, "key-0", false);
                this.changeKeyboard("key-0", false, "active");
            } else if(forwardKey == "~") {
                this.changeFingersMap(forwardKey, "tilda", true);
                this.changeKeyboard("tilda", true, "active");
                this.changeKeyboard("shift-right", true, "active");
            } else if(forwardKey == "`") {
                this.changeFingersMap(forwardKey, "tilda", false);
                this.changeKeyboard("tilda", false, "active");
            } else if(forwardKey == "!") {
                this.changeFingersMap(forwardKey, "key-1", true);
                this.changeKeyboard("key-1", true, "active");
                this.changeKeyboard("shift-right", true, "active");
            } else if(forwardKey == "@") {
                this.changeFingersMap(forwardKey, "key-2", true);
                this.changeKeyboard("key-2", true, "active");
                this.changeKeyboard("shift-right", true, "active");
            } else if(forwardKey == "#") {
                this.changeFingersMap(forwardKey, "key-3", true);
                this.changeKeyboard("key-3", true, "active");
                this.changeKeyboard("shift-right", true, "active");
            } else if(forwardKey == "$") {
                this.changeFingersMap(forwardKey, "key-4", true);
                this.changeKeyboard("key-4", true, "active");
                this.changeKeyboard("shift-right", true, "active");
            } else if(forwardKey == "%") {
                this.changeFingersMap(forwardKey, "key-5", true);
                this.changeKeyboard("key-5", true, "active");
                this.changeKeyboard("shift-right", true, "active");
            } else if(forwardKey == "^") {
                this.changeFingersMap(forwardKey, "key-6", true);
                this.changeKeyboard("key-6", true, "active");
                this.changeKeyboard("shift-right", true, "active");
            } else if(forwardKey == "&") {
                this.changeFingersMap(forwardKey, "key-7", true);
                this.changeKeyboard("key-7", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            } else if(forwardKey == "*") {
                this.changeFingersMap(forwardKey, "key-8", true);
                this.changeKeyboard("key-8", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            } else if(forwardKey == "(") {
                this.changeFingersMap(forwardKey, "key-9", true);
                this.changeKeyboard("key-9", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            } else if(forwardKey == ")") {
                this.changeFingersMap(forwardKey, "key-0", true);
                this.changeKeyboard("key-0", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            } else if(forwardKey == "-") {
                this.changeFingersMap(forwardKey, "minus", false);
                this.changeKeyboard("minus", false, "active");
            } else if(forwardKey == "_") {
                this.changeFingersMap(forwardKey, "minus", true);
                this.changeKeyboard("minus", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            } else if(forwardKey == "=") {
                this.changeFingersMap(forwardKey, "equal", false);
                this.changeKeyboard("equal", false, "active");
            } else if(forwardKey == "+") {
                this.changeFingersMap(forwardKey, "equal", true);
                this.changeKeyboard("equal", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            } else if(forwardKey == "[") {
                this.changeFingersMap(forwardKey, "open-bracket", false);
                this.changeKeyboard("open-bracket", false, "active");
            } else if(forwardKey == "{") {
                this.changeFingersMap(forwardKey, "open-bracket", true);
                this.changeKeyboard("open-bracket", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            } else if(forwardKey == "]") {
                this.changeFingersMap(forwardKey, "close-bracket", false);
                this.changeKeyboard("close-bracket", false, "active");
            } else if(forwardKey == "}") {
                this.changeFingersMap(forwardKey, "close-bracket", true);
                this.changeKeyboard("close-bracket", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            } else if(forwardKey == "|") {
                this.changeFingersMap(forwardKey, "backslash", true);
                this.changeKeyboard("backslash", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            } else if(forwardKey == ";") {
                this.changeFingersMap(forwardKey, "semicolon", false);
                this.changeKeyboard("semicolon", false, "active");
            } else if(forwardKey == ":") {
                this.changeFingersMap(forwardKey, "semicolon", true);
                this.changeKeyboard("semicolon", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            } else if(forwardKey == '"') {
                this.changeFingersMap(forwardKey, "quote", true);
                this.changeKeyboard("quote", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            } else if(forwardKey == "'") {
                this.changeFingersMap(forwardKey, "quote", false);
                this.changeKeyboard("quote", false, "active");
            } else if(forwardKey == ",") {
                this.changeFingersMap(forwardKey, "comma", false);
                this.changeKeyboard("comma", false, "active");
            } else if(forwardKey == "<") {
                this.changeFingersMap(forwardKey, "comma", true);
                this.changeKeyboard("comma", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            } else if(forwardKey == ".") {
                this.changeFingersMap(forwardKey, "dot", false);
                this.changeKeyboard("dot", false, "active");
            } else if(forwardKey == ">") {
                this.changeFingersMap(forwardKey, "dot", true);
                this.changeKeyboard("dot", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            } else if(forwardKey == "/") {
                this.changeFingersMap(forwardKey, "slash", false);
                this.changeKeyboard("slash", false, "active");
            } else if(forwardKey == "?") {
                this.changeFingersMap(forwardKey, "slash", true);
                this.changeKeyboard("slash", true, "active");
                this.changeKeyboard("shift-left", true, "active");
            }
        }
    }

    setKeyBoardCurrent(event) {
        var index = this.state.startIndex;

        var forwardKey = event.key;

        var currentStatusClassName;
        if(this.state.sentence[index] == event.key) {
            currentStatusClassName = "correct";
        } else {
            currentStatusClassName = "incorrect";
        }

        /*check input value is number or character*/
        if(this.isCharacterAndNum(forwardKey)) {
            if(this.isUpperCharacter(forwardKey)) {
                var convertedLetter = forwardKey.toLowerCase();
                this.changeCurrentKeyboard(convertedLetter, true, currentStatusClassName);
            } else {
                this.changeCurrentKeyboard(forwardKey, false, currentStatusClassName);
            }
        } else {
            if(forwardKey == " ") {
                this.changeCurrentKeyboard("space", false, currentStatusClassName);
            } else if(forwardKey == "1") {
                this.changeCurrentKeyboard("key-1", false, currentStatusClassName);
            } else if(forwardKey == "2") {
                this.changeCurrentKeyboard("key-2", false, currentStatusClassName);
            } else if(forwardKey == "3") {
                this.changeCurrentKeyboard("key-3", false, currentStatusClassName);
            } else if(forwardKey == "4") {
                this.changeCurrentKeyboard("key-4", false, currentStatusClassName);
            } else if(forwardKey == "5") {
                this.changeCurrentKeyboard("key-5", false, currentStatusClassName);
            } else if(forwardKey == "6") {
                this.changeCurrentKeyboard("key-6", false, currentStatusClassName);
            } else if(forwardKey == "7") {
                this.changeCurrentKeyboard("key-7", false, currentStatusClassName);
            } else if(forwardKey == "8") {
                this.changeCurrentKeyboard("key-8", false, currentStatusClassName);
            } else if(forwardKey == "9") {
                this.changeCurrentKeyboard("key-9", false, currentStatusClassName);
            } else if(forwardKey == "0") {
                this.changeCurrentKeyboard("key-0", false, currentStatusClassName);
            } else if(forwardKey == "~") {
                this.changeCurrentKeyboard("tilda", true, currentStatusClassName);
            } else if(forwardKey == "`") {
                this.changeCurrentKeyboard("tilda", false, currentStatusClassName);
            } else if(forwardKey == "!") {
                this.changeCurrentKeyboard("key-1", true, currentStatusClassName);
            } else if(forwardKey == "@") {
                this.changeCurrentKeyboard("key-2", true, currentStatusClassName);
            } else if(forwardKey == "#") {
                this.changeCurrentKeyboard("key-3", true, currentStatusClassName);
            } else if(forwardKey == "$") {
                this.changeCurrentKeyboard("key-4", true, currentStatusClassName);
            } else if(forwardKey == "%") {
                this.changeCurrentKeyboard("key-5", true, currentStatusClassName);
            } else if(forwardKey == "^") {
                this.changeCurrentKeyboard("key-6", true, currentStatusClassName);
            } else if(forwardKey == "&") {
                this.changeCurrentKeyboard("key-7", true, currentStatusClassName);
            } else if(forwardKey == "*") {
                this.changeCurrentKeyboard("key-8", true, currentStatusClassName);
            } else if(forwardKey == "(") {
                this.changeCurrentKeyboard("key-9", true, currentStatusClassName);
            } else if(forwardKey == ")") {
                this.changeCurrentKeyboard("key-0", true, currentStatusClassName);
            } else if(forwardKey == ")") {
                this.changeCurrentKeyboard("key-0", true, currentStatusClassName);
            } else if(forwardKey == "-") {
                this.changeCurrentKeyboard("minus", false, currentStatusClassName);
            } else if(forwardKey == "_") {
                this.changeCurrentKeyboard("minus", true, currentStatusClassName);
            } else if(forwardKey == "=") {
                this.changeCurrentKeyboard("equal", false, currentStatusClassName);
            } else if(forwardKey == "+") {
                this.changeCurrentKeyboard("equal", true, currentStatusClassName);
            } else if(forwardKey == "[") {
                this.changeCurrentKeyboard("open-bracket", false, currentStatusClassName);
            } else if(forwardKey == "{") {
                this.changeCurrentKeyboard("open-bracket", true, currentStatusClassName);
            } else if(forwardKey == "]") {
                this.changeCurrentKeyboard("close-bracket", false, currentStatusClassName);
            } else if(forwardKey == "}") {
                this.changeCurrentKeyboard("close-bracket", true, currentStatusClassName);
            } else if(forwardKey == "|") {
                this.changeCurrentKeyboard("backslash", true, currentStatusClassName);
            } else if(forwardKey == ";") {
                this.changeCurrentKeyboard("semicolon", false, currentStatusClassName);
            } else if(forwardKey == ":") {
                this.changeCurrentKeyboard("semicolon", true, currentStatusClassName);
            } else if(forwardKey == '"') {
                this.changeCurrentKeyboard("quote", true, currentStatusClassName);
            } else if(forwardKey == "'") {
                this.changeCurrentKeyboard("quote", false, currentStatusClassName);
            } else if(forwardKey == ",") {
                this.changeCurrentKeyboard("comma", false, currentStatusClassName);
            } else if(forwardKey == "<") {
                this.changeCurrentKeyboard("comma", true, currentStatusClassName);
            } else if(forwardKey == ".") {
                this.changeCurrentKeyboard("dot", false, currentStatusClassName);
            } else if(forwardKey == ">") {
                this.changeCurrentKeyboard("dot", true, currentStatusClassName);
            } else if(forwardKey == "/") {
                this.changeCurrentKeyboard("slash", false, currentStatusClassName);
            } else if(forwardKey == "?") {
                this.changeCurrentKeyboard("slash", true, currentStatusClassName);
            }
        }
    }
    /*start and stop timer*/
    startCheckSpeed(keyCode) {
        if(this.state.startIndex == 1 && keyCode != 8){
            this.setState({totalSeconds: 0});
            this.setState({totalWpm: 0});
            this.timer = setInterval(this.myTimer ,1000);
        }else if(this.state.startIndex == 0){
            this.setState({totalSeconds: 0});
            this.setState({totalWpm: 0});
            this.setState({totalAccuracy: 0});
            clearInterval(this.timer);
        }else if(this.state.startIndex == this.state.sentence.length) {
            clearInterval(this.timer);
            let options = {
                student: Meteor.userId(),
                accuracy: this.state.totalAccuracy,
                wpm: this.state.totalWpm,
                seconds: this.state.totalSeconds,
                lesson: this.props.course
            };
            Meteor.call('InsertStats', options, function(err, response){
                if(err) {
                    console.log(err);
                } else {
                }
            });
            window.localStorage.setItem("current_total_accuracy", this.state.totalAccuracy);
            window.localStorage.setItem("current_total_wpm", this.state.totalWpm);
            window.localStorage.setItem("current_total_seconds", this.state.totalSeconds);
            setTimeout(function(){
                customHistory.push('/results/'+ this.props.course);
            }.bind(this), 1000);
        }
    }
    /*Timer occurs per one sec..*/
    myTimer() {
        this.setState({totalSeconds: this.state.totalSeconds + 1});
        this.checkAccuracyAndWpm();
    }
    /*Calculate Accuracy and WPM*/
    checkAccuracyAndWpm() {
        let currentLength = this.state.startIndex;
        if(currentLength > 0) {
            let correctLetters = 0;
            for(var i = 0; i< currentLength; i++) {
                correctLetters += this.state.passedAfter[i];
            }
            let totalPercent = Math.floor(correctLetters / currentLength * 100);
            let totalSeconds = this.state.totalSeconds;
            let totalWpm = Math.floor((correctLetters / 5) / totalSeconds * 60);
            this.setState({totalAccuracy: totalPercent});
            this.setState({totalWpm: totalWpm});
        }
    }
    /*Keydown Event*/
    onKeyDown(event) {
        if(this.findValidKey(event.key, event.keyCode) && (this.state.startIndex < this.state.sentence.length)) {
            /*forward keyboard setting when fire event*/
            this.setKeyBoard(event);

            /*current keyboard setting when fire event*/
            this.setKeyBoardCurrent(event);

            index = this.state.startIndex;
            if(event.keyCode == 32) {
                event.preventDefault();
            }

            if(this.state.sentence[index] == event.key) {
                if((this.state.passedBefore[index] == 0)) {
                    this.changeLetterType(index, "r-success");
                }else {
                    this.changeLetterType(index, "typing success");
                    this.state.passedBefore[index] = 1;
                }
                this.state.passedAfter[index] = 1;
            } else {
                this.changeLetterType(index, "typing wrong");
                this.state.passedBefore[index] = 0;
                this.state.passedAfter[index] = 0;
            }

            if(this.state.startIndex < this.state.sentence.length - 1)
                this.changeLetterType(index + 1, "mouse_cursor");

            this.setState({startIndex: this.state.startIndex + 1});
            /*Start check Wpm and Accuracy*/
            this.startCheckSpeed();
        } else if(event.keyCode == 8 && this.state.startIndex != 0) {
            this.setState({startIndex: this.state.startIndex - 1});
            index = this.state.startIndex;
            this.state.passedAfter[index] = '';
            this.setKeyBoard(event);
            this.changeLetterType(index, "");
            this.changeLetterType(index, "mouse_cursor");

            if(this.state.startIndex < this.state.sentence.length - 1)
                this.changeLetterType(index + 1, "");
            /*Check again wpm and Accuracy*/
            this.startCheckSpeed(event.keyCode);
        }
    }

    /*Display sentence using Letter component*/
    renderSentence(sentence) {
        var contents = Array.from(sentence);
        var lettersGroup = [];
        contents.map( (item, i) => {
            if(i == 0) {
                lettersGroup.push(<Letter key={i} itemId = {i} lettertype="mouse_cursor" letter={item} />);
            }
            else
                lettersGroup.push(<Letter key={i} itemId = {i} lettertype="" letter={item} />);
        });
        return lettersGroup;
    }
    /*Render UI*/
    render() {
        return (
            <div>
                <div className="rule margin-top-40 padding-right-15 padding-left-15">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-left typing-text">
                                {this.renderSentence(this.state.sentence)}
                            </p>
                        </div>
                    </div>
                </div>
                <Keyboard totalWpm={this.state.totalWpm} totalAccuracy={this.state.totalAccuracy} />
            </div>
        );
    }
}

TypingSentences.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    sentence: PropTypes.string.isRequired,
    course: PropTypes.number
};