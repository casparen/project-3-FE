import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import helpers from '../../utils/helpers';
import '../../styles/profile.css';
import { Button, FormControl } from 'react-bootstrap';



class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
           response: "",
           dob: "",
           name: "",
           email: "",
           phone:"",
           day: "",
           month: "",
           year: "",
       };

       let uid = (window.localStorage.getItem("uid"))
      //  console.log(uid);
       helpers.getCurrentUser(uid).then((res) => {
         this.setState({response: res})
       })
}
// test(event){
//     event.preventDefault()
//
// }

  updateProfile() {
    console.log("click");
    // event.preventDefault()
    const data = {
      name: "",
      email: "",
      dob: "",
      phone: ""
    }

    this.state.name === "" ? data.name = this.state.response.name : data.name = this.state.name
    this.state.email === "" ? data.email = this.state.response.email : data.email = this.state.email
    this.state.phone === "" ? data.phone = this.state.response.phone : data.phone = this.state.phone
    this.state.dob === "" ? data.dob = this.state.response.dob : data.dob = this.state.dob

    // console.log(data);

    let uid = (window.localStorage.getItem("uid"))
   //  console.log(uid);
    helpers.updateCurrentUser(uid, data).then((res) => {
      console.log(res);
    })
    return browserHistory.push('/profile')
  }

  render(){
    console.log("testtt", this.name);
    // const res = this.state.response
    return (
      <div className="wrapper">
          <img className="profilePic" role="presentation" src="https://pickaface.net/assets/images/slides/slide2.png" className="profilePic"></img>
          <div className="formContainer">
            <div className="title">
                  <h5>Name:</h5>
                  <h5>Email:</h5>
                  <h5>Phone:</h5>
                  <h5>Dob:</h5>
            </div>
            <form className="info">
                <FormControl type="text" placeholder={this.state.response.name} onChange={(event) => this.setState({name: event.target.value})} />
                <FormControl type="text" placeholder={this.state.response.email} onChange={(event) => this.setState({email: event.target.value})} />
                <FormControl type="text" placeholder={this.state.response.phone} onChange={(event) => this.setState({phone: event.target.value})} />
                <FormControl type="text" placeholder={this.state.response.dob} onChange={(event) => this.setState({dob: event.target.value})} />
          </form>
          </div>
          <Button className="button" bsStyle="primary" bsSize="large" onClick={(event) => this.updateProfile(event)} block>GO</Button>

      </div>

    )
  }
}


export default EditProfile;




// {/*          <form className="FormContainer">
//             <FormControl type="text"
//               onChange={(event) => this.setState({name: event.target.value})} value={this.state.response.name}></FormControl>
//             <FormControl type="text"
//               onChange={(event) => this.setState({email: event.target.value})}
//               value={this.state.response.email}></FormControl>
//             <FormControl type="text"
//               onChange={(event) => this.setState({phone: event.target.value})}
//               value={this.state.response.email}></FormControl>
//               <FormControl type="text"
//                 onChange={(event) => this.setState({day: event.target.value})}
//                 value={this.state.response.dob}></FormControl>
//           </form>*/}
