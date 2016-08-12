import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import helpers from "../utils/helpers";
import _ from "lodash";

class Profile extends Component {
  constructor(props) {
      super(props);

      this.state = {
        response: ''
      }

helpers.checkForMatch().then((res) => {
  // console.log(res);
  this.setState({response: res})
})

  }
    render() {
      const fbProfile = this.state.response
      let user = _.values(fbProfile)

console.log("user:",user);


      // console.log("test",this.state.response);
      // console.log("profile", window.localStorage.getItem('accessToken'));


        return (
            <div>
                <h1>Profile goes here</h1>
                <div>
                  {
                    user.map((obj, index) => {
                      console.log(obj.url);
                      return (
                        <div>
                          <h4>{obj.name}</h4>
                          <h4>{obj.email}</h4>
                          <img src={obj.url}></img>
                        </div>
                      )


                    })
                  }
                </div>

            </div>
        );
    }
}

export default Profile;
