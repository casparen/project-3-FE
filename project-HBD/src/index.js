import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App';
import Profile from './components/user/profile';
import Dashboard from './components/Dashboard';
import Message from './components/message';
import SignUp from './components/user/signUp';
import LogIn from './components/user/logIn';
import EditProfile from './components/user/editProfile';
import About from './components/About';
import './styles/index.css';

const config = {
    apiKey: "AIzaSyBXKbbbaP8XJW6XGqQwnecfKrtIotN94YQ",
    authDomain: "happybday-d595a.firebaseapp.com",
    databaseURL: "https://happybday-d595a.firebaseio.com",
    storageBucket: "happybday-d595a.appspot.com",
};
firebase.initializeApp(config);

/* browserHistory keeps track of where you are on the App */
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={LogIn} />
            <Route path='/message/:uid' component={Message}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/EditProfile' component={EditProfile}/>
            <Route path='/about' component={About}/>
        </Route>
    </Router>
    , document.getElementById('root')
);
