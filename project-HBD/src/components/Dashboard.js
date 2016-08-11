import React, {Component} from 'react'
import {Link} from 'react-router'


class Dashboard extends Component {
    render() {
        return (
            <div>
                <navigation>
                    <Link to='/profile'>
                        <button>Your profile</button>
                    </Link>
                    <Link to='/allProfiles'>
                        <button>View all</button>
                    </Link>
                </navigation>
                <h4>I am App</h4>
                {this.props.children}
            </div>

        )
    }
}
export default Dashboard
