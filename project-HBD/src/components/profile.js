import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import helper2 from "../utils/helper2";
import _ from "lodash";
import '../styles/profile.css'

class Profile extends Component {
  constructor(props) {
      super(props);

      this.state = {
        response: ''
      }

helper2.getUser().then((res) => {
  // console.log(res);
  this.setState({response: res})
})



  }
    render() {
    const res = this.state.response
    // console.log(this.state.response);
      // const fbProfile = this.state.response
      // console.log("user:",user);
      // console.log("test",this.state.response);
      // console.log("profile", window.localStorage.getItem('accessToken'));

        return (
          <div className="wrapper">
            <div className="container">
              <img src="https://pickaface.net/assets/images/slides/slide2.png" className="profilePic"></img>
              <div className="text">
                <h4>{res.name}</h4>
                <h4>Email: {res.email}</h4>
                <h4>DOB: {res.dob}</h4>
                <h4>Number: {res.number}</h4>
              </div>
            </div>

          </div>

        );
    }
}

export default Profile;




{/*                                   {
                    userArr.map((obj, i) => {
                      return (
                        <div className="container">
                          <img src="https://pickaface.net/assets/images/slides/slide2.png" className="profilePic"></img>
                          <div className="text">
                            <h4>{obj.name}</h4>
                            <h4>Email: {obj.email}</h4>
                            <h4>DOB: {obj.dob}</h4>
                            <h4>Number: {obj.number}</h4>
                          </div>
                        </div>
                      )
                    })
                  }*/}
