import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import helper2 from "../../utils/helper2";



class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
          response: {name: "Harry", number: "+19175172934", dob:"1203", email: "test@test.com"},
            dob: "",
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
      //  helper2.getUser().then((res) => {
      //    console.log(res);
      //    this.setState({response: res})
      //  })

      


}


  updateProfile(event){
    console.log("click");
    event.preventDefault()
    console.log("name", this.state.name);
    console.log("test", this.state.response.name);
    // if(this.state.name.length < 0){
    //   this.setState({name: this.state.response.name})
    //
    // }
    // if(this.state.email.length < 0){
    //   this.setState({email: this.state.response.email})
    // }
    // if(this.state.phone.length < 0){
    //   this.setState({phone: this.state.response.phone})
    // }
    // if(this.state.dob.length < 0){
    //   this.setState({dob: this.state.response.dob})
    // }
    //
    // console.log("name:", this.state.name);
    // console.log("name:", this.state.name);
    // console.log("email:",this.state.email);
    // console.log("phone", this.state.phone);
    // console.log("dob:", this.state.dob);

    // const data = {
    //   Name: this.state.name,
    //   Email: this.state.email,
    //   DOB: this.state.day + this.state.month,
    //   Number: this.state.mNumber
    // }
    // //
    // helper2.updateProfile(data).then(res => {
    //   console.log("updated", res);
    // });
    // return browserHistory.push('/profile')
  }

  onChangeName(event){
    console.log(event.target.value);
    if (event.target.value.length > 1) {
      this.setState({name: event.target.value})
    }
    else {
      this.setState({name: this.state.response.name})
    }
  }

  // onChangeEmail(event){
  //
  // }


  render(){
    // const res = this.state.response
    console.log(this.state.response);
    return (
      <div className="wrapper">
        <div className="container">
          <img role="presentation" src="https://pickaface.net/assets/images/slides/slide2.png" className="profilePic"></img>
          <form className="FormContainer">



            <input type="text" onChange={(event) => this.onChangeName(event)}></input>
            <input type="text" onChange={(event) => this.onChangeEmail(event)}></input>
            <input type="text" onChange={(event) => this.setState({phone: event.target.value})} value={this.state.response.number}></input>
            <input type="text" onChange={(event) => this.setState({dob: event.target.value})} value={this.state.response.dob}></input>
          </form>
          <button onClick={(event) => this.updateProfile(event)}>GO</button>
        </div>
      </div>

    )
  }
}


export default EditProfile




{/*          <form className="FormContainer">
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
          </form>*/}
