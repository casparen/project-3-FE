import React, {Component} from 'react'
import {browserHistory} from 'react-router';
import firebaseUtils from '../../utils/firebaseUtils';
import '../../styles/login.css'
import { Button, FormControl, Modal} from 'react-bootstrap';


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
        }
    };
    handleSubmit(e) {
        e.preventDefault();
        console.log("clicked: ", this.state.email, this.state.pass);
        firebaseUtils.logIn(this.state.email, this.state.pass);
        return browserHistory.push("/");
    };
    render() {
        return (
          <div className="backgroundLogin">
            <Modal.Dialog className="logInWrapper static-modal">
              <div className="formContainer">
                <div className="title">
                      <h5>Email:</h5>
                      <h5>Password:</h5>
                </div>
                  <form className="input" action="">
                      <FormControl type="email" onChange={e => this.setState({email: e.target.value})} />
                      <FormControl  type="password" onChange={e => this.setState({pass: e.target.value})} />
                  </form>
                  <div className="btnContainer">
                    <Button className="button" bsStyle="primary" bsSize="large" onClick={e => this.handleSubmit(e)} block>LOG IN</Button>
                  </div>
              </div>
            </Modal.Dialog>
            <img className="img" src="http://i.giphy.com/mzvNZsSok3Rao.gif"></img>
          </div>


        )
    };
}
export default LogIn;
