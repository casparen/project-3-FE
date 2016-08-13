import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import firebaseUtils from '../../utils/firebaseUtils';

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
        let data = {
          name: this.state.name,
          email: this.state.email,
          phone: "+1" + this.state.phone,
          dob: this.state.month + this.state.day
        }
        firebaseUtils.signUp(this.state.email, this.state.pass, data);
        return browserHistory.push("/");
    }
    render() {
        return (
            <div>
                <h3>sign up</h3>
                <form action="">
                    name:        <input type="text" placeholder="name" onChange={e => this.setState({name: e.target.value})} /><br/>
                    email:       <input type="email" placeholder="email" onChange={e => this.setState({email: e.target.value})} /><br/>
                    password:    <input type="password" placeholder="password" onChange={e => this.setState({pass: e.target.value})} /><br/>
                    number:      <input type="text" placeholder="phone number" onChange={e => this.setState({phone: e.target.value})} /><br/>
                                 <div>
                    month:         <input type="text" placeholder="month" onChange={e => this.setState({month: e.target.value})} />
                    day:           <input type="text" placeholder="day" onChange={e => this.setState({day: e.target.value})} />
                    year:          <input type="text" placeholder="year" onChange={e => this.setState({year: e.target.value})} /><br/>
                                </div>
                  <button onClick={e => this.handleSubmit(e)}>SIGN UP</button>
                </form>
            </div>
        )
    }
}
export default SignUp
