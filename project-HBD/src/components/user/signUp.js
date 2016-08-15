import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import firebaseUtils from '../../utils/firebaseUtils';
import Datepicker from 'react-bootstrap-date-picker';
import { Button, FormControl, Modal } from 'react-bootstrap';
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
            <div className="background">
                <Modal.Dialog className="SignUpWrapper static-modal">
                    <div className="formContainerSignUp">
                        <div className="tagContainer">
                          <h5>Name</h5>
                          <h5>Email</h5>
                          <h5>Password</h5>
                          <h5>Number</h5>
                          <h5>Birthday</h5>
                        </div>

                        <form action="" className="SingupInput" >
                            <FormControl type="text" placeholder="name" onChange={e => this.setState({name: e.target.value})} />
                            <FormControl type="email" placeholder="email" onChange={e => this.setState({email: e.target.value})} />
                            <FormControl type="password" placeholder="password" onChange={e => this.setState({pass: e.target.value})} />
                            <FormControl type="tel" placeholder="phone number" onChange={e => this.setState({phone: e.target.value})} />
                            <div className="calendar">
                              <Datepicker />
                            </div>
                        </form>
                        <div className="buttonContainer">
                          <Button className="signupButton" bsStyle="primary" bsSize="large" onClick={e => this.handleSubmit(e)} block>Sign Up</Button>
                        </div>
                    </div>

               </Modal.Dialog>
               <div className="imageContainer">
                 <img className="image" src="http://i.giphy.com/mzvNZsSok3Rao.gif"></img>
               </div>
            </div>
        )
    }
}
export default SignUp


{/*                  <img className="image" src="http://i.giphy.com/mzvNZsSok3Rao.gif"></img>*/}
