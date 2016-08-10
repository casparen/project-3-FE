import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App';
import Dashboard from './components/dashboard';
import LogIn from './components/login';
import Message from './components/message';
import Profile from './components/profile';
import SignUp from './components/signup';
import Splash from './components/splash';
import './styles/index.css';

/* browserHistory keeps track of where you are on the App */
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/login" component={LogIn}/>
      <Route path="/message" component={Message}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/splash" component={Splash}/>
    </Route>
  </Router>
)
,document.getElementById('root')
);
