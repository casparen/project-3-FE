import  React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App.js';

class Rowter extends Component {
  render() {

    return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
        <Route path='*' component={App}></Route>
      </Router>
    );
  }
}


export default Router;
