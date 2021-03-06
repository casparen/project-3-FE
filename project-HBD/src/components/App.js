import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {Navbar, NavDropdown, MenuItem, Button, Nav} from 'react-bootstrap';
import firebaseUtils from '../utils/firebaseUtils';
import Helpers from '../utils/helpers';
import "../styles/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: window.localStorage.getItem("uid") || "",
            currentUser: ""
        };
        
        Helpers.getCurrentUser(window.localStorage.getItem("uid"))
            .then(res => {
                this.setState({currentUser: res.name})
            })
    };

    handleClick() {
        firebaseUtils.logOut();
        return browserHistory.push("/");
    };

    render() {
        const isLoggedIn = (
            <Nav>
                <NavDropdown eventKey={1} title={this.state.currentUser} id="basic-nav-dropdown">
                    <div className="dropdown">
                        <MenuItem eventKey={3.1}>
                            <Link to='/profile'>
                                <Button className="userBtn" bsStyle="primary" bsSize="small" block>Your Profile</Button>
                            </Link>
                        </MenuItem>
                        <MenuItem eventKey={3.2}>
                            <Link to='/dashboard'>
                                <Button className="userBtn" bsStyle="primary" bsSize="small" block>Dashboard</Button>
                            </Link>
                        </MenuItem>
                        <MenuItem eventKey={3.3}>
                            <Button className="userBtn" bsStyle="danger" bsSize="small" block
                                    onClick={e => this.handleClick()}>Log Out</Button>
                        </MenuItem>

                    </div>
                </NavDropdown>
            </Nav>
        );
        const isLoggedOut = (
            <div className="buttonContainer">
                <Link to='/signup'>
                    <Button bsStyle="primary" className="btn">Sign Up</Button>
                </Link>
                <Link to='/login'>
                    <Button bsStyle="success" className="btn">Log In</Button>
                </Link>
                <Link to='/about'>
                    <Button bsStyle="success" className="btn">About</Button>
                </Link>
            </div>
        );

        return (
            <div>
                <Navbar inverse fluid>
                    <div className="navBar">
                        <div className="leftNav">
                            <Link to='/dashboard' className="dashboard">GiphyBirthday</Link>
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
