import React, {Component} from 'react';
import '../styles/form.css';
import Helper from '../utils/helpers.js';
import {Link, Router, Route, browserHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class SignUpForm extends Component {
    constructor(props) {
        super();
        this.state = {
            fbUser: {},
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
        Helper.getFbUser().then((res) => {
          // console.log("form",res);
          this.setState({fbUser: res})
        })
    }

    handleSubmit(event) {


        event.preventDefault()
        // console.log(this.state.Fname);
        // console.log(this.state.firstName + ' ' + this.state.lastName);
        // console.log('first name', this.state.firstName);
        // console.log('last name', this.state.lastName);
        // console.log('email', this.state.email);
        // console.log('birthday', this.state.day, this.state.month, this.state.year);
        //
        // console.log("programm", this.state.programm);
        // console.log("corhort", this.state.cohort);
        console.log(this.state.name);
        // const data = {}
        const data = {
              name: this.state.name,
              email: this.state.email,
              phone: this.state.phone,
              dob: this.state.day + this.state.month,
              program: this.state.programm,
              cohort: this.state.cohort,
              id: this.state.fbUser.id,
              accessToken: this.state.fbUser.accessToken
            };

            Helper.addToDB(data).then((res) => {
              console.log(res);
            })
            return browserHistory.push('/app')



    }

    render() {
      // console.log("form",this.state.fbUser);
        return (
            <div>
                <h1>Sign up</h1>
                <form className="FormContainer">
                  <input type="text" placeholder={this.state.fbUser.name}
                         onChange={(event) => this.setState({name: event.target.value})} value={this.state.name}></input>

                       {/*<input type="text" placeholder="first name"
                           onChange={(event) => this.setState({firstName: event.target.value})}
                           value={this.state.firstName}></input>
                    <input type="text" placeholder="last name"
                           onChange={(event) => this.setState({lastName: event.target.value})}
                           value={this.state.lastName}></input>*/}
                    <input type="text" placeholder={this.state.fbUser.email}
                           onChange={(event) => this.setState({email: event.target.value})}
                           value={this.state.email}></input>
                    <input type="text" placeholder="phone number"
                            onChange={(event) => this.setState({phone: event.target.value})}
                            value={this.state.phone}></input>
                    <div>
                        <input type="text" placeholder="day"
                               onChange={(event) => this.setState({day: event.target.value})}
                               value={this.state.day}></input>
                        <input type="text" placeholder="month"
                               onChange={(event) => this.setState({month: event.target.value})}
                               value={this.state.month}></input>
                        <input type="text" placeholder="year"
                               onChange={(event) => this.setState({year: event.target.value})}
                               value={this.state.year}></input>
                               <input type="text" placeholder="program"
                                      onChange={(event) => this.setState({year: event.target.value})}
                                      value={this.state.program}></input>
                               <input type="text" placeholder="cohort"
                                      onChange={(event) => this.setState({year: event.target.value})}
                                      value={this.state.cohort}></input>
                    </div>

                    <select onChange={(event) => this.setState({programm: event.target.value})}>
                        <option>Please Choose</option>
                        <option value="WDI">WDI</option>
                        <option value="UXI">UXI</option>
                    </select>

                    <select onChange={(event) => this.setState({cohort: event.target.value})}>
                        <option>Please Choose</option>
                        <option value="robots">robots</option>
                        <option value="purple rain">purple rain</option>
                    </select>
                      <button onClick={(event) => this.handleSubmit(event)}></button>
                </form>
            </div>

        )
    }
}

export default SignUpForm
