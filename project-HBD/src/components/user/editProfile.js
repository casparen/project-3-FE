import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import helpers from '../../utils/helpers';

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

  updateProfile(event){
    console.log("click");
    event.preventDefault()
    const data = {
      name: "",
      email: "",
      phone: "",
      dob: ""
    }

    this.state.name === "" ? data.name = this.state.response.name : data.name = this.state.name
    this.state.email === "" ? data.email = this.state.response.email : data.email = this.state.email
    this.state.phone === "" ? data.phone = this.state.response.phone : data.phone = this.state.phone
    this.state.dob === "" ? data.dob = this.state.response.dob : data.dob = this.state.dob

    console.log(data);



    return browserHistory.push('/profile')
  }

  render(){
    console.log("testtt", this.name);
    // const res = this.state.response
    return (
      <div className="wrapper">
        <div className="container">
          <img role="presentation" src="https://pickaface.net/assets/images/slides/slide2.png" className="profilePic"></img>
          <form className="FormContainer">
            Name: <input type="text" placeholder={this.state.response.name} onChange={(event) => this.setState({name: event.target.value})} ></input>
            Email: <input type="text" placeholder={this.state.response.email} onChange={(event) => this.setState({email: event.target.value})} ></input>
            Phone: <input type="text" placeholder={this.state.response.phone} onChange={(event) => this.setState({phone: event.target.value})} ></input>
            Dob: <input type="text" placeholder={this.state.response.dob} onChange={(event) => this.setState({dob: event.target.value})}></input>
          </form>
          <button onClick={(event) => this.updateProfile(event)}>GO</button>

        </div>
      </div>

    )
  }
}


export default EditProfile;




// {/*          <form className="FormContainer">
//             <input type="text"
//               onChange={(event) => this.setState({name: event.target.value})} value={this.state.response.name}></input>
//             <input type="text"
//               onChange={(event) => this.setState({email: event.target.value})}
//               value={this.state.response.email}></input>
//             <input type="text"
//               onChange={(event) => this.setState({phone: event.target.value})}
//               value={this.state.response.email}></input>
//               <input type="text"
//                 onChange={(event) => this.setState({day: event.target.value})}
//                 value={this.state.response.dob}></input>
//           </form>*/}
