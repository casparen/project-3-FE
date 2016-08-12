import React, {Component} from 'react';
import {browserHistory} from 'react-router'
import helper2 from "../utils/helper2";
import '../styles/profile.css'

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: [],
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

  edit (event){
    console.log("click");
    event.preventDefault();
    console.log(this.state.response);
    return browserHistory.push('/EditProfile')

  }



    render() {
    const res = this.state.response
    console.log(res);
    // console.log(this.state.response);
      // const fbProfile = this.state.response
      // console.log("user:",user);
      // console.log("test",this.state.response);
      // console.log("profile", window.localStorage.getItem('accessToken'));

        return (
          <div className="wrapper">
            <div className="container">
              <img role="presentation" src="https://pickaface.net/assets/images/slides/slide2.png" className="profilePic"></img>
              <h2>{res.name}</h2>
              <h2>{res.email}</h2>
              <h2>{res.dob}</h2>

                <button onClick={(event) => this.edit(event)}>Edit</button>
            </div>
          </div>

        );
      }
  }


export default Profile;
