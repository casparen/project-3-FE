import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    onSignIn(googleUser) {
      console.log('click');
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    }

// handleClick () {
//   console.log('clicks')
// }

// renderGoogleLoginButton () {
//    console.log('rendering google signin button')
//    gapi.signin2.render('g-signin2', {
//      'scope': 'https://www.googleapis.com/auth/plus.login',
//      'width': 200,
//      'height': 50,
//      'longtitle': true,
//      'theme': 'light',
//      'onsuccess': this.onSignIn
//    })
//  }
  componentDidMount() {
     gapi.signin2.render('g-signin2', {
       'scope': 'https://www.googleapis.com/auth/plus.login',
       'width': 200,
       'height': 50,
       'longtitle': true,
       'theme': 'light',
       'onsuccess': this.onSignIn
     })
  }

 // componentDidMount () {
 //  //  window.addEventListener('google-loaded',this.renderGoogleLoginButton);
 //  console.log('rendering google signin button')
 //  gapi.signin2.render('g-signin2', {
 //    'scope': 'https://www.googleapis.com/auth/plus.login',
 //    'width': 200,
 //    'height': 50,
 //    'longtitle': true,
 //    'theme': 'light',
 //    'onsuccess': this.onSignIn
 //  })
 // }


  signOut() {
    console.log('signout');
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    console.log('User signed out.');
    });
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="g-signin2" id="g-signin2"></div>
          <a href="#" onClick={ this.signOut }>Sign out</a>

        </div>


    );
  }
}

export default App;


//http://stackoverflow.com/questions/31640234/using-google-sign-in-button-with-react-2
//https://developers.google.com/identity/sign-in/web/sign-in
