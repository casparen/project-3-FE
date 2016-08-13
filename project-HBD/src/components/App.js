import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import firebaseUtils from '../utils/firebaseUtils';
// import IsLoggedOut from './user/isLoggedOut';
// import IsLoggedIn from './user/isLoggedIn';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: window.localStorage.getItem("uid") || ""
        };
    };

    handleClick() {
        firebaseUtils.logOut();
        return browserHistory.push("/");
    };

    render() {
        const isLoggedIn = (
            <NavDropdown eventKey={1} title="USERNAME" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>
                    <Link to='/profile'>
                        <button>Your profile</button>
                    </Link>
                </MenuItem>
                <MenuItem eventKey={3.2}>
                    <button onClick={e => this.handleClick()}>LOG OUT</button>
                </MenuItem>
            </NavDropdown>
        );
        const isLoggedOut = (
            <div>
                <Link to='/signup'>
                    <button>SIGN UP</button>
                </Link>
                <Link to='/login'>
                    <button>LOG IN</button>
                </Link>
            </div>
        );

        return (
            <div>
                <Navbar inverse className="navBar">
                    <Link to='/dashboard'>
                        <button className="button">Dashboard</button>
                    </Link>
                    {this.state.isLoggedin.length > 0 ? isLoggedIn : isLoggedOut}
                </Navbar>
                <h4>I am App</h4>
                {this.props.children}
            </div>
        );
    }
}
export default App;
