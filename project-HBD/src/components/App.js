import React, {Component} from 'react';
import {Link} from 'react-router';
import firebaseUtils from '../utils/firebaseUtils';
import {Navbar, NavDropdown, MenuItem} from 'react-bootstrap';

class App extends Component {
    // constructor(props) {
    //     super(props);
    // };
    handleClick() {
        firebaseUtils.logOut();
    }
    render() {
        return (
            <div>
                <Navbar inverse className="navBar">
                    <Link to='/dashboard'>
                        <button className="button">Dashboard</button>
                    </Link>
                    <Link to='/signup'>
                        <button>SIGN UP</button>
                    </Link>
                    <Link to='/login'>
                        <button>LOG IN</button>
                    </Link>
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

                </Navbar>
                <h4>I am App</h4>
                {this.props.children}
            </div>
        )
    }
}
export default App;