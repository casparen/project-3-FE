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
            <div className="buttonContainer">
                <Link to='/signup'>
                    <Button bsStyle="primary" className="btn">Sign Up</Button>
                </Link>
                <Link to='/login' >
                    <Button bsStyle="success" className="btn">Log In</Button>
                </Link>
            </div>
        );

        return (
            <div>
                <Navbar inverse fluid>
                    <div className="navBar">
                      <div className="leftNav">
                        <Link to='/dashboard' className="dashboard">Dashboard</Link>
                      </div>
                      {this.state.isLoggedin.length > 0 ? isLoggedIn : isLoggedOut}
                    </div>
                </Navbar>
                {this.props.children}
            </div>
        );
    }
}
export default App;
