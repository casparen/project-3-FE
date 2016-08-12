import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import helper2 from "../utils/helper2";
import _ from "lodash";
import '../styles/profile.css'

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: '',
      Name: '',
      Email: '',
      DOB: '',
      Number: '',
      Program: '',
      Cohort: ''
    }
    helper2.getUser().then((res) => {
      console.log(res);
      this.setState({response: res})
    })
  }

onChange(event){
  event.preventDefault()
  this.setState({response: event.target.value})
   }

handleClickUpdate (event){
  event.preventDefault();
  console.log(update);

  const data = {
    Name: this.state.name,
    Email: this.state.email,
    DOB: this.state.dob,
    Number: this.state.mNumber,
    Program: this.state.program,
    Cohort:  this.state.cohorot
  }


  helper2.updateProfile().then(res => {
    console.log("updated", res);
  });
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
              <form className="text">
                <input type="text" onChange={(event) => this.handleClickUpdate(event)}>Name: {res.name}</input>
                <input type="text" onChange={(event) => this.handleClickUpdate(event)}>Email: {res.email}</input>
                <input type="text" onChange={(event) => this.handleClickUpdate(event)}>DOB: {res.dob}</input>
                <input type="text" onChange={(event) => this.handleClickUpdate(event)}>Number: {res.mNumber}</input>
                <input type="text" onChange={(event) => this.handleClickUpdate(event)}>Program: {res.program}</input>
                <input type="text" onChange={(event) => this.handleClickUpdate(event)}>Cohort: {res.cohort}</input>
              </form>
            </div>
            <button onClick={(event) => this.updateProfile(event)}>Update</button>

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
