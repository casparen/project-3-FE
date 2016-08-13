import React, {Component} from 'react'
import firebaseUtils from '../../utils/firebaseUtils';

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
    };
    render() {
        return (
            <div>
                <h3>LOG IN</h3>
                <form action="">
                    email: <input type="text" onChange={e => this.setState({email: e.target.value})} /><br/>
                    password: <input type="text" onChange={e => this.setState({pass: e.target.value})} /><br/>
                    <button onClick={e => this.handleSubmit(e)}>LOG IN</button>
                </form>
            </div>
        )
    };
}
export default LogIn;
