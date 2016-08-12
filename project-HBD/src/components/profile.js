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

// helpers.checkForMatch().then((res) => {
//   // console.log(res);
//   this.setState({response: res})
// })



  }
    render() {
      // const fbProfile = this.state.response
      // let user = _.values(fbProfile)
      // console.log("user:",user);
      // console.log("test",this.state.response);
      // console.log("profile", window.localStorage.getItem('accessToken'));
      const userArr = [
          {name: "Harry", number: "+19175172934", dob:"1203"}
          // {name: "Al", number: "+12017804856", dob: "0812"},
          // {name: "Mimi", number: "+9175763311", dob: "0811"},
          // {name: "Caspar", number: "+6318006170", dob: "1103"}
      ];
        return (
                <div className="container">
                  {
                    userArr.map((obj, i) => {
                      return (
                        <div>
                          <img src="https://pickaface.net/assets/images/slides/slide2.png" className="profilePic"></img>
                          <h1>{obj.name}</h1>
                        </div>
                      )
                    })
                  }
                </div>
        );
    }
}

export default Profile;




{/*                  {
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
                  }*/}
