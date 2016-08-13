import React, {Component} from 'react';
import {Link} from 'react-router';
import firebaseUtils from '../utils/firebaseUtils';
import {Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import IsLoggedOut from './user/isLoggedOut';
import IsLoggedIn from './user/IsLoggedIn';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoggedin: window.localStorage.getItem("uid")
        };
    };
    handleClick() {
        firebaseUtils.logOut();
    }
    render() {
        if (this.state.isLoggedin) {
          return (
            <div>
                <Navbar inverse className="navBar">
                    <Link to='/dashboard'>
                        <button className="button">Dashboard</button>
                    </Link>
                    <IsLoggedIn />
                </Navbar>
                <h4>I am App</h4>
                {this.props.children}
            </div>
          )
        } else { //end if statement
          return (
            <div>
                <Navbar inverse className="navBar">
                    <Link to='/dashboard'>
                        <button className="button">Dashboard</button>
                    </Link>
                    <IsLoggedOut />
                </Navbar>
                <h4>I am App</h4>
                {this.props.children}
            </div>
          )
        } // end else statement
    }
}
export default App;
