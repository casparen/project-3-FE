import React, {Component} from 'react';
import helper2 from "../utils/helper2";
import '../styles/editProfile.css'
import {browserHistory} from 'react-router'



class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
          response: {},
           name: '',
           firstName: "",
           lastName: "",
           email: "",
           phone:"",
           day: "",
           month: "",
           year: "",
           program: "",
           cohort: ""
       }
       helper2.getUser().then((res) => {
         console.log(res);
         this.setState({response: res})
       })
     }



  updateProfile(event){
    console.log("click");
    event.preventDefault()
    console.log("Name", this.state.name);


    const data = {
      Name: this.state.name,
      Email: this.state.email,
      DOB: this.state.day + this.state.month,
      Number: this.state.mNumber
    }
    //
    helper2.updateProfile(data).then(res => {
      console.log("updated", res);
    });
    return browserHistory.push('/profile')
  }


  render(){
    // const res = this.state.response
    return (
      <div className="wrapper">
        <div className="container">
          <img role="presentation" src="https://pickaface.net/assets/images/slides/slide2.png" className="profilePic"></img>
          <form className="FormContainer">
            <input type="text"
              onChange={(event) => this.setState({name: event.target.value})} value={this.state.response.name}></input>
            <input type="text"
              onChange={(event) => this.setState({email: event.target.value})}
              value={this.state.response.email}></input>
            <input type="text"
              onChange={(event) => this.setState({phone: event.target.value})}
              value={this.state.response.email}></input>
              <input type="text"
                onChange={(event) => this.setState({day: event.target.value})}
                value={this.state.response.dob}></input>
          </form>
          <button onClick={(event) => this.updateProfile(event)}>GO</button>
        </div>
      </div>

    )
  }
}


export default EditProfile
