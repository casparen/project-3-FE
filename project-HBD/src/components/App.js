import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {Navbar, NavDropdown, MenuItem, Button, Nav } from 'react-bootstrap';
import firebaseUtils from '../utils/firebaseUtils';
import "../styles/App.css";

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
          <Nav>
            <NavDropdown eventKey={1} title="USERNAME" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>
                    <Link to='/profile'>
                        <Button bsStyle="primary" bsSize="small" block>Your Profile</Button>
                    </Link>
                </MenuItem>
                <MenuItem eventKey={3.2}>
                    <Button bsStyle="danger" bsSize="small" block onClick={e => this.handleClick()}>Log Out</Button>
                </MenuItem>
            </NavDropdown>
          </Nav>
        );
        const isLoggedOut = (
            <div>
                <Link to='/signup'>
                    <Button bsStyle="primary">Sign Up</Button>
                </Link>
                <Link to='/login'>
                    <Button bsStyle="success">Log In</Button>
                </Link>
            </div>
        );

        return (
            <div>
                <Navbar inverse fluid className="navBar">
                    <Link to='/dashboard'><h3 className="dashboard">Dashboard</h3></Link>
                    {this.state.isLoggedin.length > 0 ? isLoggedIn : isLoggedOut}
                </Navbar>
                {this.props.children}
            </div>
        );
    }
}
export default App;
