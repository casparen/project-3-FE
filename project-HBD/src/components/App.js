import React, {Component} from 'react'
import {Link} from 'react-router'

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>

                <navigation>
                    <Link to='/allProfiles'>
                        <button>Dashboard</button>
                    </Link>
                    <Link to='/profile'>
                        <button>Your profile</button>
                    </Link>
                </navigation>
                <h4>I am App</h4>
                {this.props.children}
            </div>
        )
    }
}
export default App
