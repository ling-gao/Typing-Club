/* 2017-5-1
 * created by Frank-2
 * */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Header component
export default class Footer extends Component {
    render() {
        return (
            <div className="footer text-center">
                <img className="margin-top-40 footer-logo" src="svg/logo.svg"/>
                <p className="text-uppercase color-white margin-top-20">
                    &copy; <b>kepler</b> typing - 2017
                </p>
                <p className="padding-bottom-40 color-white margin-bottom-0">Contact - Store - Affiliate</p>
            </div>
        );
    }
}
