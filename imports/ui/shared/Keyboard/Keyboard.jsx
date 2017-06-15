/* 2017-5-3
 * created by Frank-2
 * */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Keyboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var wpmAngle = Math.floor(this.props.totalWpm * 1.25 - 75);
        var accuracyAngle = Math.floor(this.props.totalAccuracy * 1.25 - 75);
        var wpmIndicatorStyle = {
            position: "absolute",
            bottom: "0px",
            height: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            opacity: 0.8,
            transformOrigin: "bottom",
            transform: "rotate(" + wpmAngle + "deg)",
            msTransform: "rotate(" + wpmAngle + "deg)",/* IE 9 */
            WebkitTransform: "rotate(" + wpmAngle + "deg)",/* Chrome, Safari, Opera */
            transition: "all ls"
        };
        var accuracyIndicatorStyle = {
            position: "absolute",
            bottom: "0px",
            height: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            opacity: 0.8,
            transformOrigin: "bottom",
            transform: "rotate(" + accuracyAngle + "deg)",
            msTransform: "rotate(" + accuracyAngle + "deg)",/* IE 9 */
            WebkitTransform: "rotate(" + accuracyAngle + "deg)",/* Chrome, Safari, Opera */
            transition: "all ls"
        };
        return (
            <div className="rule margin-top-40 padding-right-15 padding-left-15 keyboard-wrapper">
                <div className="row">
                    <div className="col-md-3 col-md-offset-1 col-xs-6 wpm-speed">
                        <img className="keyboard" src="img/wpm_speed.png" />
                        <p className="wpm-info"><span>{this.props.totalWpm}</span>&nbsp;WPM</p>
                        <img style={wpmIndicatorStyle} src="img/indicator.png" />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-3 col-xs-6 accuracy">
                        <img className="keyboard" src="img/accuracy.png" />
                        <p className="accuracy-info"><span>{this.props.totalAccuracy}</span>&nbsp;%</p>
                        <img style={accuracyIndicatorStyle} src="img/indicator.png" />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="12 12 663.3 254">
                            <g id="keys">
                                <path id="tilda" className="st0" d="M58.4,53.7c0,1.7-1.4,3-3,3H18.9c-1.6,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z"/>
                                <path id="key-1" className="st0" d="M103.4,53.7c0,1.7-1.3,3-3,3H63.9c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"/>
                                <path id="q" className="st0" d="M126.7,97.6c0,1.6-1.3,3-3,3H87.2c-1.7,0-3-1.4-3-3V62.3c0-1.6,1.3-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"/>
                                <path id="a" className="st0" d="M137.4,141.5c0,1.6-1.4,3-3,3H97.9c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"/>
                                <path id="z" className="st0" d="M160.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V185.4z"/>
                                <path id="x" className="st0" d="M205.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"/>
                                <path id="c" className="st0" d="M250.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"/>
                                <path id="v" className="st0" d="M295.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"/>
                                <path id="b" className="st0" d="M340.8,185.4c0,1.7-1.4,3-3,3h-36.6c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.6c1.6,0,3,1.4,3,3V185.4z"/>
                                <path id="n" className="st0" d="M385.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"/>
                                <path id="m" className="st0" d="M430.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"/>
                                <path id="comma" className="st0" d="M475.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"/>
                                <path id="dot" className="st0" d="M520.8,185.4c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V185.4z"/>
                                <path id="slash" className="st0" d="M565.8,185.4c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V185.4z"/>
                                <path id="s" className="st0" d="M182.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"/>
                                <path id="d" className="st0" d="M227.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"/>
                                <path id="f" className="st0" d="M272.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"/>
                                <path id="g" className="st0" d="M317.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"/>
                                <path id="h" className="st0" d="M362.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"/>
                                <path id="j" className="st0" d="M407.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"/>
                                <path id="k" className="st0" d="M452.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"/>
                                <path id="l" className="st0" d="M497.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"/>
                                <path id="semicolon" className="st0" d="M542.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"/>
                                <path id="quote" className="st0" d="M587.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"/>
                                <path id="w" className="st0" d="M171.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"/>
                                <path id="e" className="st0" d="M216.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.7,1.4-3,3-3h36.5c1.7,0,3,1.3,3,3V97.6z"/>
                                <path id="r" className="st0" d="M261.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"/>
                                <path id="t" className="st0" d="M306.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"/>
                                <path id="y" className="st0" d="M351.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"/>
                                <path id="u" className="st0" d="M396.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"/>
                                <path id="i" className="st0" d="M441.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"/>
                                <path id="o" className="st0" d="M486.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"/>
                                <path id="p" className="st0" d="M531.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"/>
                                <path id="open-bracket" className="st0" d="M576.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"/>
                                <path id="close-bracket" className="st0" d="M621.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"/>
                                <path id="backslash" className="st0" d="M668.8,97.6c0,1.6-1.3,3-3,3h-38.6c-1.6,0-3-1.4-3-3V62.4c0-1.6,1.4-3,3-3h38.6c1.7,0,3,1.4,3,3V97.6z"/>
                                <path id="key-2" className="st0" d="M148.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z"/>
                                <path id="key-3" className="st0" d="M193.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z"/>
                                <path id="key-4" className="st0" d="M238.4,53.7c0,1.7-1.4,3-3,3H199c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z"/>
                                <path id="key-5" className="st0" d="M283.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.7,0,3,1.3,3,3V53.7z"/>
                                <path id="key-6" className="st0" d="M328.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.7,1.4-3,3-3h36.5c1.7,0,3,1.3,3,3V53.7z"/>
                                <path id="key-7" className="st0" d="M373.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"/>
                                <path id="key-8" className="st0" d="M418.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"/>
                                <path id="key-9" className="st0" d="M463.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"/>
                                <path id="key-0" className="st0" d="M508.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"/>
                                <path id="minus" className="st0" d="M553.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z"/>
                                <path id="equal" className="st0" d="M598.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z"/>
                                <path id="backspace" className="st0" d="M668.8,53.7c0,1.7-1.3,3-3,3h-61.9c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h61.9c1.7,0,3,1.4,3,3V53.7z"/>
                                <path id="tab" className="st0" d="M81.7,97.6c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.3-3,3-3h59.8c1.7,0,3,1.4,3,3V97.6z"/>
                                <path id="capslock" className="st0" d="M92.4,141.5c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h70.4c1.7,0,3,1.3,3,3V141.5z"/>
                                <path id="enter" className="st0" d="M668.8,141.5c0,1.6-1.3,3-3,3h-72.9c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h72.9c1.7,0,3,1.3,3,3V141.5z"/>
                                <path id="shift-left" className="st0" d="M115.8,185.4c0,1.7-1.3,3-3,3H18.9c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h93.8c1.7,0,3,1.4,3,3V185.4z"/>
                                <path id="control" className="st0" d="M105,236c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3v-42c0-1.7,1.3-3,3-3H102c1.7,0,3,1.3,3,3V236z"/>
                                <path id="option-left" className="st0" d="M182.4,236c0,1.7-1.4,3-3,3h-68.8c-1.7,0-3-1.3-3-3v-42c0-1.7,1.3-3,3-3h68.8c1.6,0,3,1.3,3,3V236z"/>
                                <path id="option-right" className="st0" d="M531.8,191c1.7,0,3,1.4,3,3v42c0,1.7-1.3,3-3,3h-62.9c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3H531.8z"/>
                                <path className="st0" d="M668.8,236.1c0,1.7-1.3,3-3,3H540.3c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3h125.5c1.7,0,3,1.4,3,3V236.1z"/>
                                <path id="space" className="st0" d="M460.4,191c1.6,0,3,1.4,3,3v42c0,1.7-1.4,3-3,3H187.5c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3H460.4z"/>
                                <path id="shift-right" className="st0" d="M668.8,185.4c0,1.7-1.3,3-3,3h-94.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h94.5c1.7,0,3,1.4,3,3V185.4z"/>
                            </g>
                            <g id="letters">
                                <text id="text-tilda" transform="matrix(1 0 0 1 33.4903 33.804)" className="st1 st2 st3">~</text>
                                <text id="text-tilda-up" transform="translate(35.8009 52.6643)" className="st1 st2 st3">`</text>
                                <text id="text-key-1" transform="translate(78.626 50.4071)" className="st1 st2 st3">1</text>
                                <text id="text-key-2" transform="translate(123.299 51.1765)" className="st1 st2 st3">2</text>
                                <text id="text-key-3" transform="translate(169.684 51.404)" className="st1 st2 st3">3</text>
                                <text id="text-key-4" transform="translate(213.076 51.404)" className="st1 st2 st3">4</text>
                                <text id="text-key-5" transform="translate(258.072 51.404)" className="st1 st2 st3">5</text>
                                <text id="text-key-6" transform="translate(303.282 51.0891)" className="st1 st2 st3">6</text>
                                <text id="text-key-7" transform="translate(349.506 51.0891)" className="st1 st2 st3">7</text>
                                <text id="text-key-8" transform="translate(393.281 51.2157)" className="st1 st2 st3">8</text>
                                <text id="text-key-9" transform="translate(438.574 51.2157)" className="st1 st2 st3">9</text>
                                <text id="text-key-0" transform="translate(483.491 51.2157)" className="st1 st2 st3">0</text>
                                <text id="text-minus" transform="translate(530.401 50.4071)" className="st1 st2 st3">-</text>
                                <text id="text-equal-up" transform="translate(573.519 51.2157)" className="st1 st2 st3">=</text>
                                <text id="text-key-1-up" transform="matrix(1 0 0 1 80.5513 31.7605)" className="st1 st2 st3">!</text>
                                <text id="text-key-2-up" transform="matrix(1 0 0 1 119.8565 30.45)" className="st1 st2 st3">@</text>
                                <text id="text-key-3-up" transform="matrix(1 0 0 1 169.6841 31.76)" className="st1 st2 st3">#</text>
                                <text id="text-key-4-up" transform="matrix(1 0 0 1 213.0758 31.2171)" className="st1 st2 st3">$</text>
                                <text id="text-key-5-up" transform="matrix(1 0 0 1 255.5748 30.8318)" className="st1 st2 st3">%</text>
                                <text id="text-key-6-up" transform="matrix(1 0 0 1 303.9556 32.4427)" className="st1 st2 st3">^</text>
                                <text id="text-key-7-up" transform="matrix(1 0 0 1 348.2554 31.76)" className="st1 st2 st3">&amp;</text>
                                <text id="text-key-8-up" transform="matrix(1 0 0 1 394.5334 32.8236)" className="st1 st2 st3">*</text>
                                <text id="text-key-9-up" transform="matrix(1 0 0 1 440.3076 30.6435)" className="st1 st2 st3">(</text>
                                <text id="text-key-0-up" transform="matrix(1 0 0 1 485.1645 30.6435)" className="st1 st2 st3">)</text>
                                <text id="text-minus-up" transform="matrix(1 0 0 1 528.7588 25.5423)" className="st1 st2 st3">_</text>
                                <text id="text-equal" transform="matrix(1 0 0 1 573.5195 32.4422)" className="st1 st2 st3">+</text>
                                <text id="text-a" transform="translate(110.006 133.33)" className="st1 st2 st4">a</text>
                                <text id="text-b" transform="translate(313.232 176.746)" className="st1 st2 st4">b</text>
                                <text id="text-d" transform="translate(200.357 133.33)" className="st1 st2 st4">d</text>
                                <text id="text-c" transform="translate(222.539 176.746)" className="st1 st2 st4">c</text>
                                <text id="text-e" transform="translate(189.816 88.4744)" className="st1 st2 st4">e</text>
                                <text id="text-f" transform="translate(247.344 133.33)" className="st1 st2 st4">f</text>
                                <text id="text-g" transform="translate(289.919 133.33)" className="st1 st2 st4">g</text>
                                <text id="text-h" transform="translate(335.421 133.33)" className="st1 st2 st4">h</text>
                                <text id="text-i" transform="translate(417.174 88.4743)" className="st1 st2 st4">i</text>
                                <text id="text-j" transform="translate(382.329 133.33)" className="st1 st2 st4">j</text>
                                <text id="text-k" transform="translate(426.514 133.33)" className="st1 st2 st4">k</text>
                                <text id="text-l" transform="translate(475.552 133.33)" className="st1 st2 st4">l</text>
                                <text id="text-m" transform="translate(399.682 176.746)" className="st1 st2 st4">m</text>
                                <text id="text-n" transform="translate(358.319 176.746)" className="st1 st2 st4">n</text>
                                <text id="text-o" transform="translate(459.407 88.4743)" className="st1 st2 st4">o</text>
                                <text id="text-p" transform="translate(505.155 88.4743)" className="st1 st2 st4">p</text>
                                <text id="text-q" transform="translate(98.3524 88.4743)" className="st1 st2 st4">q</text>
                                <text id="text-r" transform="translate(235.995 88.4743)" className="st1 st2 st4">r</text>
                                <text id="text-s" transform="translate(154.854 133.33)" className="st1 st2 st4">s</text>
                                <text id="text-t" transform="translate(282.109 88.4744)" className="st1 st2 st4">t</text>
                                <text id="text-u" transform="translate(369.971 88.4743)" className="st1 st2 st4">u</text>
                                <text id="text-v" transform="translate(269.394 176.746)" className="st1 st2 st4">v</text>
                                <text id="text-w" transform="translate(141.86 88.4744)" className="st1 st2 st4">w</text>
                                <text id="text-x" transform="translate(178.738 176.746)" className="st1 st2 st4">x</text>
                                <text id="text-y" transform="translate(325.511 88.4744)" className="st1 st2 st4">y</text>
                                <text id="text-z" transform="translate(134.278 176.746)" className="st1 st2 st4">z</text>
                                <text id="text-semicolon-up" transform="translate(519.074 136.713)" className="st1 st2 st3">;</text>
                                <text id="text-semicolon" transform="matrix(1 0 0 1 519.074 119.3763)" className="st1 st2 st3">:</text>
                                <text id="text-comma" transform="translate(451.328 180.041)" className="st1 st2 st5">,</text>
                                <text id="text-comma-up" transform="matrix(1 0 0 1 450.2827 164.3396)" className="st1 st2 st3">&lt;</text>
                                <text id="text-dot" transform="translate(495.973 181.041)" className="st1 st2 st5">.</text>
                                <text id="text-dot-up" transform="matrix(1 0 0 1 494.9274 164.3396)" className="st1 st2 st3">&gt;</text>
                                <text id="text-slash" transform="translate(543.408 181.041)" className="st1 st2 st3">/</text>
                                <text id="text-slash-up" transform="matrix(1 0 0 1 541.3276 163.2498)" className="st1 st2 st3">?</text>
                                <text id="text-quote-up" transform="translate(565.621 138.713)" className="st1 st2 st3">'</text>
                                <text id="text-quote" transform="matrix(1 0 0 1 565.621 120.3763)" className="st1 st2 st3">"</text>
                                <text id="text-open-bracket" transform="translate(553.392 94.426)" className="st1 st2 st3">[</text>
                                <text id="text-open-bracket-up" transform="matrix(1 0 0 1 552.9709 74.8769)" className="st1 st2 st3">}</text>
                                <text id="text-close-bracket" transform="translate(598.766 94.426)" className="st1 st2 st3">]</text>
                                <text id="text-close-bracket-up" transform="matrix(1 0 0 1 598.3443 74.7849)" className="st1 st2 st3">}</text>
                                <text id="text-backslash" transform="translate(644.357 96.8807)" className="st1 st2 st3">\</text>
                                <text id="text-backslash-up" transform="matrix(1 0 0 1 644.4941 74.8769)" className="st1 st2 st3">|</text>
                                <text id="text-tab" transform="matrix(1 0 0 1 23.3467 93.2342)" className="st1 st2 st6">tab</text>
                                <text id="caps-lock" transform="matrix(1 0 0 1 23.3467 137.7127)" className="st1 st2 st6">caps lock</text>
                                <text id="text-shift-left" transform="matrix(1 0 0 1 23.3467 181.0408)" className="st1 st2 st6">shift</text>
                                <text id="text-shift-right" transform="matrix(1 0 0 1 641.826 180.0408)" className="st1 st2 st6">shift</text>
                                <text id="text-backspace" transform="matrix(1 0 0 1 606.4653 51.1765)" className="st1 st2 st6">backspace</text>
                                <text id="text-enter" transform="matrix(1 0 0 1 636.3144 137.7128)" className="st1 st2 st6">enter</text>
                                <text transform="matrix(1 0 0 1 23.3467 232.465)" className="st1 st2 st6">control</text>
                                <text id="text-option-left" transform="matrix(1 0 0 1 129.2338 231.4646)" className="st1 st2 st6">option</text>
                                <text id="text-space" transform="matrix(1 0 0 1 199.7899 232.4646)" className="st1 st2 st6">space</text>
                                <text id="text-option-right" transform="matrix(1 0 0 1 483.8864 231.4646)" className="st1 st2 st6">option</text>
                            </g>
                        </svg>
                    </div>
                </div>

                <div className="row moving-hands">
                    <div className="col-xs-6 text-left left-hand-wrapper">
                        <img id="finger-tilda" className="moving-finger hidden" src="img/fingers/tilda.png" />
                        <img id="finger-key-1" className="moving-finger hidden" src="img/fingers/1.png" />
                        <img id="finger-key-2" className="moving-finger hidden" src="img/fingers/2.png" />
                        <img id="finger-key-3" className="moving-finger hidden" src="img/fingers/3.png" />
                        <img id="finger-key-4" className="moving-finger hidden" src="img/fingers/4.png" />
                        <img id="finger-key-5" className="moving-finger hidden" src="img/fingers/5.png" />
                        <img id="finger-q" className="moving-finger hidden" src="img/fingers/q.png" />
                        <img id="finger-w" className="moving-finger hidden" src="img/fingers/w.png" />
                        <img id="finger-e" className="moving-finger hidden" src="img/fingers/e.png" />
                        <img id="finger-r" className="moving-finger hidden" src="img/fingers/r.png" />
                        <img id="finger-t" className="moving-finger hidden" src="img/fingers/t.png" />
                        <img id="finger-a" className="moving-finger hidden" src="img/fingers/a.png" />
                        <img id="finger-s" className="moving-finger hidden" src="img/fingers/s.png" />
                        <img id="finger-d" className="moving-finger hidden" src="img/fingers/d.png" />
                        <img id="finger-f" className="moving-finger hidden" src="img/fingers/f.png" />
                        <img id="finger-g" className="moving-finger hidden" src="img/fingers/g.png" />
                        <img id="finger-space" className="moving-finger hidden" src="img/fingers/a.png" />
                        <img id="finger-q" className="moving-finger hidden" src="img/fingers/g.png" />
                        <img id="finger-left-shift" className="moving-finger hidden" src="img/fingers/left-shift.png" />
                        <img id="finger-z" className="moving-finger hidden" src="img/fingers/z.png" />
                        <img id="finger-x" className="moving-finger hidden" src="img/fingers/x.png" />
                        <img id="finger-c" className="moving-finger hidden" src="img/fingers/c.png" />
                        <img id="finger-v" className="moving-finger hidden" src="img/fingers/v.png" />
                        <img id="finger-b" className="moving-finger hidden" src="img/fingers/b.png" />
                        <img id="finger-capslock" className="moving-finger hidden" src="img/fingers/capslock.png" />
                        <img id="finger-tab" className="moving-finger hidden" src="img/fingers/tab.png" />
                    </div>
                    <div className="col-xs-6 text-right right-hand-wrapper">
                        <img id="finger-key-6" className="moving-finger hidden" src="img/fingers/6.png" />
                        <img id="finger-key-7" className="moving-finger hidden" src="img/fingers/7.png" />
                        <img id="finger-key-8" className="moving-finger hidden" src="img/fingers/8.png" />
                        <img id="finger-key-9" className="moving-finger hidden" src="img/fingers/9.png" />
                        <img id="finger-key-0" className="moving-finger hidden" src="img/fingers/0.png" />
                        <img id="finger-minus" className="moving-finger hidden" src="img/fingers/plus.png" />
                        <img id="finger-equal" className="moving-finger hidden" src="img/fingers/minus.png" />
                        <img id="finger-y" className="moving-finger hidden" src="img/fingers/y.png" />
                        <img id="finger-u" className="moving-finger hidden" src="img/fingers/u.png" />
                        <img id="finger-i" className="moving-finger hidden" src="img/fingers/i.png" />
                        <img id="finger-o" className="moving-finger hidden" src="img/fingers/o.png" />
                        <img id="finger-p" className="moving-finger hidden" src="img/fingers/p.png" />
                        <img id="finger-open-bracket" className="moving-finger hidden" src="img/fingers/open-blacket.png" />
                        <img id="finger-close-bracket" className="moving-finger hidden" src="img/fingers/close-blacket.png" />
                        <img id="finger-backslash" className="moving-finger hidden" src="img/fingers/invert-slash.png" />
                        <img id="finger-h" className="moving-finger hidden" src="img/fingers/h.png" />
                        <img id="finger-j" className="moving-finger hidden" src="img/fingers/j.png" />
                        <img id="finger-k" className="moving-finger hidden" src="img/fingers/k.png" />
                        <img id="finger-l"className="moving-finger hidden" src="img/fingers/l.png" />
                        <img id="finger-semicolon" className="moving-finger hidden" src="img/fingers/semicolon.png" />
                        <img id="finger-quote" className="moving-finger hidden" src="img/fingers/quote.png" />
                        <img id="finger-b" className="moving-finger hidden" src="img/fingers/b.png" />
                        <img id="finger-n" className="moving-finger hidden" src="img/fingers/n.png" />
                        <img id="finger-m" className="moving-finger hidden" src="img/fingers/m.png" />
                        <img id="finger-comma" className="moving-finger hidden" src="img/fingers/comma.png" />
                        <img id="finger-dot" className="moving-finger hidden" src="img/fingers/dot.png" />
                        <img id="finger-slash" className="moving-finger hidden" src="img/fingers/slash.png" />
                        <img id="finger-right-shift" className="moving-finger hidden" src="img/fingers/right-shift.png" />
                    </div>
                </div>
            </div>
        );
    }
}

Keyboard.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    totalWpm: PropTypes.number.isRequired,
    totalAccuracy: PropTypes.number.isRequired,
};