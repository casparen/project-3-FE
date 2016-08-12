import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import './styles/index.css';
import Splash from './components/splash'
import App from './components/App';
import Profile from './components/profile.js'
import Dashboard from './components/Dashboard.js'
import Message from './components/message.js'
import Form from './components/form.js'


/* browserHistory keeps track of where you are on the App */
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Splash} />
      <Route path='/form' component={Form} />
          <Route path='/app' component={App}>

            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/message' component={Message}/>
            <Route path='/profile' component={Profile} />
          </Route>
    </Router>
    , document.getElementById('root')
);
