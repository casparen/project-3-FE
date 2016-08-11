import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import Splash from './components/splash.js'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard.js';
import Message from './components/Message';
import Profile from './components/profile.js'
import App from './components/app'
import



export default (
    <IndexRoute component={Splash} />
        <Route path="/signup" component={SignUp}/>
          <Route path="/app" component={App}>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/message" component={Message}/>
            <Route path="/profile" component={Profile}/>
          </Route>
);
