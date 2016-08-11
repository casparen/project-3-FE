import React, {Component} from 'react'
import helpers from '../utils/helpers';
import _ from 'lodash';
import {Link} from 'react-router'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: ''
        };
        helpers.checkForMatch()
            .then(res => {
                let user = _.values(res).filter(each => each);
                console.log(user);
                this.setState({response: user})
            })
    }
    render() {
        if (this.state.response.length > 0) {
            const listUsers = user.map((each, i) => {
                return (
                    <li key={i}>
                        {each}
                    </li>
                )
            })
        };
        return (
            <div>
                <h1>View all profiles</h1>
                <ul>
                    {listUsers}
                </ul>
                <Link to='/message'>
                    <button>Link to message</button>
                </Link>
            </div>
        )
    }
}

export default Dashboard
