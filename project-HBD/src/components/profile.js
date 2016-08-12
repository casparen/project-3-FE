import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

class Profile extends Component {
  constructor(props) {
      super(props);
    
  }
    render() {
      console.log("profile", window.localStorage.getItem('accessToken'));
        return (
            <div>
                <h1>Profile goes here</h1>
            </div>
        );
    }
}

export default Profile;
