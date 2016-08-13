import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Helper from '../../utils/helpers.js';
import '../styles/form.css';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fbUser: {},
            name: '',
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            day: "",
            month: "",
            year: "",
            program: "",
            cohort: ""
        };
        Helper.getFbUser().then((res) => {
            // console.log("form",res);
            this.setState({fbUser: res})
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        // console.log(this.state.Fname);
        // console.log(this.state.firstName + ' ' + this.state.lastName);
        // console.log('first name', this.state.firstName);
        // console.log('last name', this.state.lastName);
        // console.log('email', this.state.email);
        // console.log('birthday', this.state.day, this.state.month, this.state.year);
        //
        // console.log("program", this.state.program);
        // console.log("cohort", this.state.cohort);
        console.log(this.state.name);
        // const data = {}
        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            dob: this.state.day + this.state.month,
            program: this.state.program,
            cohort: this.state.cohort,
            id: this.state.fbUser.id,
            accessToken: this.state.fbUser.accessToken
        };

        Helper.addToDB(data).then((res) => {
            console.log(res);
        });
        return browserHistory.push('/app')
    }

    render() {
        // console.log("form",this.state.fbUser);
        return (
            <div>
                <h1>Sign up</h1>
                <form className="FormContainer">
                    <div>
                        <input type="text" placeholder={this.state.fbUser.name}
                               onChange={e => this.setState({name: e.target.value})}
                               value={this.state.name}></input>
                        <input type="text" placeholder={this.state.fbUser.email}
                               onChange={e => this.setState({email: e.target.value})}
                               value={this.state.email}></input>
                        <input type="text" placeholder="phone number"
                               onChange={e => this.setState({phone: e.target.value})}
                               value={this.state.phone}></input>
                    </div>
                    <div>
                        <input type="text" placeholder="day"
                               onChange={e => this.setState({day: e.target.value})}
                               value={this.state.day}></input>
                        <input type="text" placeholder="month"
                               onChange={e => this.setState({month: e.target.value})}
                               value={this.state.month}></input>
                        <input type="text" placeholder="year"
                               onChange={e => this.setState({year: e.target.value})}
                               value={this.state.year}></input>
                        <input type="text" placeholder="program"
                               onChange={e => this.setState({year: e.target.value})}
                               value={this.state.program}></input>
                        <input type="text" placeholder="cohort"
                               onChange={e => this.setState({year: e.target.value})}
                               value={this.state.cohort}></input>
                    </div>
                    <select onChange={e => this.setState({program: e.target.value})}>
                        <option>Please Choose</option>
                        <option value="WDI">WDI</option>
                        <option value="UXI">UXI</option>
                    </select>
                    <select onChange={e => this.setState({cohort: e.target.value})}>
                        <option>Please Choose</option>
                        <option value="robots">robots</option>
                        <option value="purple rain">purple rain</option>
                    </select>
                    <button onSubmit={e => this.handleSubmit()}></button>
                </form>
            </div>

        )
    }
}

export default SignUpForm;
