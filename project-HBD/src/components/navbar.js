import React, {Component} from 'react'
import '../App.js'

class Navbar extends Component {
    render() {
        return (
            <div>
            <Link to='/profile'>
                <button>Your profile</button>
            </Link>
            <Link to='/allProfiles'>
                <button>Dashboard</button>
            </Link>
            </div>
        );
    }
}

export default Navbar;
