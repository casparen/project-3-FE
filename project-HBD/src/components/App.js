import React, { Component } from 'react';
import '../styles/App.css';
import Signup from './signup.js';
import Splash from './splash.js';
import Profile from './profile.js';
import Message from './message.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>App</h2>
        <Signup />
        <Splash />
        <Profile />
        <Message />
      </div>
    );
  }
}

export default App;
