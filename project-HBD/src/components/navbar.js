import React, {Component} from 'react'
import '../App.js'

class Navbar extends Component {
    render() {
        return (
            <div>
            <Link to='/profile'>
                <Button bsStyle="default" bsSize="small">Your profile</Button>
            </Link>
            <Link to='/allProfiles'>
                <Button bsStyle="default" bsSize="small">Dashboard</Button>
            </Link>
            </div>
        );
    }
}

export default Navbar;
