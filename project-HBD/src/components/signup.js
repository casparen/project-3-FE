import React, { Component } from 'react'


class SignUpForm extends Component {
constructor(props){
  super();
  this.state = {
    firstName: "",
    lastName: "",
    email: "",
    day: "",
    month:"",
    year: ""
  }
}



  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.Fname);
  }
  render(){
    return (
      <div>
        <h1>Sign up</h1>
        <form>
          <input type="text" placeholder="first name" onChange={(event) => this.setState({firstName: event.target.value})} value={this.state.firstName}></input>
          <input type="text" placeholder="last name" onChange={(event) => this.setState({lastName: event.target.value})} value={this.state.lastName}></input>
          <input type="text" placeholder="email" onChange={(event) => this.setState({email: event.target.value})} value={this.state.email}></input>
          <div>
            <input type="text" placeholder="day" onChange={(event) => this.setState({day: event.target.value})} value={this.state.day}></input>
            <input type="text" placeholder="month" onChange={(event) => this.setState({month: event.target.value})} value={this.state.month}></input>
            <input type="text" placeholder="year" onChange={(event) => this.setState({year: event.target.value})} value={this.state.year}></input>
          </div>
          <button onClick={(event) => this.handleSubmit(event)}>SUBMIT</button>
        </form>
    </div>

    )
  }
}

export default SignUpForm
