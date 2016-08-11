import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import './styles/index.css';
import Routes from './router.js'


/* browserHistory keeps track of where you are on the App */
ReactDOM.render(
  <Route history={browserHistory} routes={Routes} />
  ,document.getElementById('root')
);
