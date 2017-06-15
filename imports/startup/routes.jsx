/* 2017-5-1
 * crated by Frank-2
 * */
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Router, Switch} from 'react-router';
import createHashHistory from 'history/createHashHistory';

import LandingLayout from './layouts/LandingLayout.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';
import Home from '../ui/pages/frontend/Home/Home.jsx';
import LigIn from '../ui/pages/frontend/LogIn/LogIn.jsx';
import Register from '../ui/pages/frontend/Register/Register.jsx';
import Listpage from '../ui/pages/frontend/Listpage/Listpage.jsx';
import Lesson from '../ui/pages/frontend/Lesson/Lesson.jsx';
import Results from '../ui/pages/frontend/Results/Results.jsx';

const customHistory = createHashHistory();
export const renderRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Switch>
                <Route exact path="/" render={() => <LandingLayout><Home /></LandingLayout>}/>
                <Route exact path="/login" render={() => <LandingLayout><LigIn /></LandingLayout>}/>
                <Route exact path="/register" render={() => <LandingLayout><Register /></LandingLayout>}/>
                <Route exact path="/list" render={() => <LandingLayout><Listpage /></LandingLayout>}/>
                <Route path="/lesson/:course" render={() => <LandingLayout><Lesson /></LandingLayout>}/>
                <Route path="/results/:userid" render={() => <LandingLayout><Results /></LandingLayout>}/>
            </Switch>
            <Switch>
                <Route exact path="/admin" render={() => <AdminLayout><Home /></AdminLayout>}/>
            </Switch>
        </div>
    </Router>
);
