/* 2017-5-1
 * created by Frank-2
 * */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ImageSelect from '../../shared/Select/ImageSelect.jsx';

// Header component
export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logo_class: 'site-logo'
        }
        this.updateLogoStatus = this.updateLogoStatus.bind(this);
    }
    updateLogoStatus() {
        if(this.state.logo_class == 'site-logo') {
            this.setState({logo_class: 'site-logo-hide'});
        }else {
            this.setState({logo_class: 'site-logo'});
        }
    }
    render() {
        return (
            <nav className="navbar navbar-dark-blue navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button onClick={this.updateLogoStatus} type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <a className="navbar-brand" href="/">
                            <div className={this.state.logo_class}>
                                <img src="img/rocket_logo.png"/>
                            </div>
                        </a>
                    </div>

                    <div id="navbar" className="collapse navbar-collapse typing-menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Learn</a></li>
                            <li><a href="#about">Test</a></li>
                            <li><a href="#contact">Store</a></li>
                            <li>
                                <ImageSelect />
                            </li>
                            <li>
                                <select className="azerty select-azerty">
                                    <option value="fr">Azerty</option>
                                </select>
                            </li>
                            <li>
                                <Link to="/login" className="btn btn-default navbar-btn login-btn">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}