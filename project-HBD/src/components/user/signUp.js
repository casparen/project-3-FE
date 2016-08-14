import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import firebaseUtils from '../../utils/firebaseUtils';
import Datepicker from 'react-bootstrap-date-picker';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pass: '',
            phone: '',
            month: '',
            day: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("clicked: ", this.state.email, this.state.pass);

        let dob = e.target.elements[4].value;
        dob = dob.substr(0, dob.indexOf('T')).split("-").splice(1,2).join("");
        console.info("dob", dob);

        let data = {
          name: this.state.name,
          email: this.state.email,
          phone: "+1" + this.state.phone,
          dob: this.state.dob
        }
        firebaseUtils.signUp(this.state.email, this.state.pass, data);
        return browserHistory.push("/");
    }
    render() {
        return (
            <div>
                <h3>sign up</h3>
                <form action="" onSubmit={e => this.handleSubmit(e)}>
                    name:        <input type="text" placeholder="name" onChange={e => this.setState({name: e.target.value})} /><br/>
                    email:       <input type="email" placeholder="email" onChange={e => this.setState({email: e.target.value})} /><br/>
                    password:    <input type="password" placeholder="password" onChange={e => this.setState({pass: e.target.value})} /><br/>
                    number:      <input type="text" placeholder="phone number" onChange={e => this.setState({phone: e.target.value})} /><br/>
                    <div>
                      <Datepicker /><br/>
                    </div>
                  <button type="submit">SIGN UP</button>
                </form>

            </div>
        )
    }
}
export default SignUp
