import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import './styles/index.css';
import Splash from './components/splash'
import App from './components/App';
import Profile from './components/profile.js'
import AllProfiles from './components/allProfiles.js'
import Message from './components/message.js'


/* browserHistory keeps track of where you are on the App */
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Splash}/>
        <Route path='/app' component={App}>
            <Route path='/allProfiles' component={AllProfiles}/>
            <Route path='/message' component={Message}/>
            <Route path='/profile' component={Profile}/>
        </Route>
    </Router>
    , document.getElementById('root')
);
