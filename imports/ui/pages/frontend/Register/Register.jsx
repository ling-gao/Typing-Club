/* 2017-5-2
 * created by Frank-2
 * */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

const customHistory = createHashHistory();

//Register component
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            errors: {}
        }
    }

    updateFirstName(e){
        this.setState({firstName: e.target.value});
    }

    updateLastName(e){
        this.setState({lastName: e.target.value});
    }

    updateEmail(e){
        this.setState({email: e.target.value});
    }

    updatePassword(e){
        this.setState({password: e.target.value});
    }

    handleSubmit() {
        var options = {
            email: this.state.email,
            password: this.state.password,
            profile: {
                first_name: this.state.firstName,
                last_name: this.state.lastName
            },
            username: this.state.email
        };

        Accounts.createUser(options , function(err){
            if(err) {
                console.log(err);
            }else {
                console.log("Successfully registered !");
                customHistory.push('/list');
            }
        });
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
                                        <h3 className="form-title">Register your account</h3>
                                        <div className="alert alert-danger display-hide hidden">
                                            <button className="close" data-close="alert"></button>
                                            <span>Enter any username and password. </span>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label visible-ie8 visible-ie9">First Name</label>
                                            <div className="input-icon">
                                                <input onChange={this.updateFirstName} className="form-control placeholder-no-fix"
                                                       type="text" autoComplete="off" placeholder="First Name" name="firstName" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label visible-ie8 visible-ie9">Last Name</label>
                                            <div className="input-icon">
                                                <input onChange={this.updateLastName} className="form-control placeholder-no-fix"
                                                       type="text" autoComplete="off" placeholder="Last Name" name="lastName" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label visible-ie8 visible-ie9">Email</label>
                                            <div className="input-icon">
                                                <input onChange={this.updateEmail} className="form-control placeholder-no-fix"
                                                       type="text" autoComplete="off" placeholder="Email" name="email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label visible-ie8 visible-ie9">Password</label>
                                            <div className="input-icon">
                                                <input onChange={this.updatePassword} className="form-control placeholder-no-fix"
                                                       type="password" autoComplete="off" placeholder="Password" name="password" />
                                            </div>
                                        </div>
                                        <div className="checkbox">
                                            <button onClick={this.handleSubmit} className="btn btn-primary pull-right">SignUp</button>
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
                                        <div className="create-account">
                                            <p>
                                                Already have an account?&nbsp; <Link to="/login" id="register-btn">Login</Link>
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