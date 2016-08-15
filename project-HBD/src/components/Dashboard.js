import React, {Component} from 'react'
import DashboardList from './DashboardList';
import _ from 'lodash';
import '../styles/dashboard.css';
import firebase from 'firebase';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
        };
        // realtime firebase user info
        var userRef = firebase.database().ref("ga/wdi/robots/users").orderByChild("dob");
        userRef.on("value", snapshot => {
            console.log("snapshot", snapshot.val());
            let res = snapshot.val();
            let user = _.values(res).filter(each => each);
            console.log(user);
            this.setState({response: user});
            console.log("state: ", this.state.response);
        });
    }

    render() {
        if (this.state.response.length === 0) {
            return <div>LOADING...</div>
        }
        return (
            <div>
                <h3 className="titleDashboard">Upcoming Birthdays</h3>
                <DashboardList users={this.state.response}/>
            </div>
        )
    }
}

export default Dashboard;
