/* 2017-5-2
 * crated by Frank-2
 * */
import React, {Component} from 'react';

import Header from '../../ui/components/Header/Header.jsx';
import Footer from '../../ui/components/Footer/Footer.jsx';

// App component - represents the whole app
export default class LandingLayout extends Component {
    render() {
        return (
            <div className="app">
                <div className="header">
                    <Header />
                </div>
                <div className="content">
                    {this.props.children}
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}