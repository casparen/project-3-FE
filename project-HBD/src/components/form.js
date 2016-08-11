import React, {Component} from 'react'
import '../styles/signup.css'

class SignUpForm extends Component {
    constructor(props) {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            day: "",
            month: "",
            year: "",
            programm: "",
            cohort: ""
        }
    }

    birthday() {

    }


    handleSubmit(event) {
        event.preventDefault()
        // console.log(this.state.Fname);
        console.log('first name', this.state.firstName);
        console.log('last name', this.state.lastName);
        console.log('email', this.state.email);
        console.log('birthday', this.state.day, this.state.month, this.state.year);

        console.log("programm", this.state.programm);
        console.log("corhort", this.state.cohort);
    }

    render() {
        return (
            <div>
                <h1>Sign up</h1>
                <form className="FormContainer">
                    <input type="text" placeholder="first name"
                           onChange={(event) => this.setState({firstName: event.target.value})}
                           value={this.state.firstName}></input>
                    <input type="text" placeholder="last name"
                           onChange={(event) => this.setState({lastName: event.target.value})}
                           value={this.state.lastName}></input>
                    <input type="text" placeholder="email"
                           onChange={(event) => this.setState({email: event.target.value})}
                           value={this.state.email}></input>
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
                    </div>

                    <select onChange={(event) => this.setState({programm: event.target.value})}>
                        <option>Please Choose</option>
                        <option value="WDI">WDI</option>
                        <option value="test">test</option>
                    </select>

                    <select onChange={(event) => this.setState({cohort: event.target.value})}>
                        <option>Please Choose</option>
                        <option value="robots">robots</option>
                        <option value="purple rain">purple rain</option>
                    </select>

                    <button onClick={(event) => this.handleSubmit(event)}>SUBMIT</button>
                </form>
            </div>

        )
    }
}

export default SignUpForm
