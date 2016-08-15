import React, {Component} from 'react'
import helpers from '../utils/helpers';
import DashboardList from './DashboardList';
import _ from 'lodash';
import '../styles/dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
        };
        helpers.getUserGroup()
            .then(res => {
                let user = _.values(res).filter(each => each);
                console.log(user);
                this.setState({response: user});
                console.log("state: ", this.state.response);
            })
    }

    render() {
        if (this.state.response.length === 0) {
            return <div>LOADING...</div>
        }
        return (
            <div>
                <h3 className="titleDashboard">Upcoming Birthdays</h3>
                <DashboardList users={this.state.response} />
            </div>
        )
    }
}

export default Dashboard;
