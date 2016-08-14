import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import firebaseUtils from '../../utils/firebaseUtils';
import Datepicker from 'react-bootstrap-date-picker';
import { Button, FormGroup } from 'react-bootstrap';
import '../../styles/signup.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pass: '',
            phone: '',
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
          dob: dob
        }
        firebaseUtils.signUp(this.state.email, this.state.pass, data);
        return browserHistory.push("/");
    }
    render() {
        return (
              <div className="wrapper">
                <div className="background"><img src="https://media.giphy.com/media/lfAmTSkxUv9io/giphy.gif"/></div><br/>
                <h3 className="title">Sign Up</h3><br/><br/>

                <form action="" onSubmit={e => this.handleSubmit(e)}>
                  <FormGroup className="form" bsSize="small">
                    name:        <br/><input type="text" placeholder="name" onChange={e => this.setState({name: e.target.value})} /><br/>
                  email:         <br/><input type="email" placeholder="email" onChange={e => this.setState({email: e.target.value})} /><br/>
                password:        <br/><input type="password" placeholder="password" onChange={e => this.setState({pass: e.target.value})} /><br/>
              number:            <br/><input type="tel" placeholder="phone number" onChange={e => this.setState({phone: e.target.value})} /><br/>
                  <div className="calendar">
                    birthday: <Datepicker />
                  </div>
                    <br/>
                    <br/>
                    <hr></hr>
                    <br/>
                  <Button className="signup" bsStyle="success" type="submit">Sign Up</Button>
                </FormGroup>

                </form>

            </div>
        )
    }
}
export default SignUp
