import React, { Component } from 'react';
import '../styles/App.css';
import Signup from './signup.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>App</h2>
        <Signup />
      </div>
    );
  }
}

export default App;
