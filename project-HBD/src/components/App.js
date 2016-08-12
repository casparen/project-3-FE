import React, {Component} from 'react'
import {Link} from 'react-router'
import '../styles/App.css'

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
              <navigation className="navBar">
                <Link to='/dashboard'><button className="button">Dashboard</button></Link>
                <Link to='/profile'><button>Your profile</button></Link>
              </navigation>
              <h4>I am App</h4>
                {this.props.children}
            </div>
        )
    }
}
export default App
