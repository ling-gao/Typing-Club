/* 2017-5-2
 * created by Frank-2
 * */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import createHashHistory from 'history/createHashHistory';

const customHistory = createHashHistory();

//Home component
export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
        }
    }

    updateEmail(e){
        this.setState({email: e.target.value});
    }

    updatePassword(e){
        this.setState({password: e.target.value});
    }

    handleSubmit(props, context) {
        Meteor.loginWithPassword(this.state.email, this.state.password, function(err){
            if(err) {
                console.log(err);
            }else {
                customHistory.push('/list');
            }

        })
    }
    render() {
        return (
            <div className="home-main-body">
                <div className="middle-part-1 text-center">
                    <div className="middle-part-rocket-1">
                        <img src="img/rocket1.png" />
                    </div>
                    <div className="action-part text-left padding-right-15 padding-left-15">
                        <div className="row">
                            <div className="col-md-2 col-md-offset-8">
                                <div className="login-content">
                                    <div className="login-form">
                                        <h3 className="form-title">Login to your account</h3>
                                        <div className="alert alert-danger display-hide hidden">
                                            <button className="close" data-close="alert"></button>
                                            <span>Enter any username and password. </span>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label visible-ie8 visible-ie9">Username</label>
                                            <div className="input-icon">
                                                <input onChange={this.updateEmail} className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Username" name="username" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label visible-ie8 visible-ie9">Password</label>
                                            <div className="input-icon">
                                                <input onChange={this.updatePassword} className="form-control placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" name="password" />
                                            </div>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" /> Remember me</label>
                                            <button onClick={this.handleSubmit} className="btn btn-primary pull-right">Login</button>
                                        </div>
                                        <div className="login-options">
                                            <h4>Or login with</h4>
                                            <ul className="social-icons">
                                                <li>
                                                    <a className="facebook" href="#"><i className="fa fa-google-plus-square"></i></a>
                                                </li>
                                                <li>
                                                    <a className="facebook" href="#"><i className="fa fa-facebook-square"></i></a>
                                                </li>
                                                <li>
                                                    <a className="facebook" href="#"><i className="fa fa-twitter-square"></i></a>
                                                </li>
                                                <li>
                                                    <a className="facebook" href="#"><i className="fa fa-linkedin-square"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="forget-password">
                                            <h4>Forgot your password ?</h4>
                                            <p>
                                                no worries, click <a href="javascript:;" id="forget-password">
                                                here </a>
                                                to reset your password.
                                            </p>
                                        </div>
                                        <div className="create-account">
                                            <p>
                                                Don't have an account yet ?&nbsp; <Link to="/register" id="register-btn">
                                                Create an account </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}