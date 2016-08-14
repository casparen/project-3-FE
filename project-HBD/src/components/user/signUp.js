import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import firebaseUtils from '../../utils/firebaseUtils';
import Datepicker from 'react-bootstrap-date-picker';
import { Button, FormGroup, Modal } from 'react-bootstrap';
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
                <div className="imageContainer">
                  <img className="image" src="http://i.giphy.com/mzvNZsSok3Rao.gif"></img>
                </div>
                <Modal.Dialog className="SignUpWrapper static-modal">
                    <div className="formContainerSignUp">
                        <h3 className="title">Sign Up</h3><br/><br/>
                        <form action="" onSubmit={e => this.handleSubmit(e)}>
                                <FormGroup className="form" bsSize="small">
                                      name:        <input type="text" placeholder="name" onChange={e => this.setState({name: e.target.value})} />
                                      email:       <input type="email" placeholder="email" onChange={e => this.setState({email: e.target.value})} />
                                      password:    <input type="password" placeholder="password" onChange={e => this.setState({pass: e.target.value})} />
                                      number:      <input type="tel" placeholder="phone number" onChange={e => this.setState({phone: e.target.value})} />
                                  <div className="calendar">
                                    birthday: <Datepicker />
                                  </div>
                              </FormGroup>
                        </form>

                    </div>
                    <Button className="signup" bsStyle="success" type="submit">Sign Up</Button>
               </Modal.Dialog>
            </div>
        )
    }
}
export default SignUp
