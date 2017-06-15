/* 2017-5-1
 * created by Frank-2
 * */
import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {renderRoutes} from '../imports/startup/routes.jsx';

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('app'));
});
