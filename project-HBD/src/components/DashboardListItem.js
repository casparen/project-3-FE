import React from 'react';
import {Link} from 'react-router';
import {Button, Panel, Well} from 'react-bootstrap';
import '../styles/dashboard.css';

const DashboardListItem = ({user}) => {
    // const user = this.props.user;
    return (
        <li className="dashboardListItem">
            <Panel header={user.name} bsStyle="success" className="dashboard-panel">
                <div className="avatarContainer">
                    <img className="default" src="http://hackersworld.org/images/profile.png" role="presentation"/>
                </div>
                <div className="userInfoContainer">
                    <div className="tagContainer">
                        <h5>Name</h5>
                        <h5>Email</h5>
                        <h5>Mobile</h5>
                        <h5>Birthday</h5>
                    </div>
                    <div>
                        <Well>{user.name}</Well>
                        <Well>{user.email}</Well>
                        <Well>{user.phone}</Well>
                        <Well>{user.dob}</Well>
                    </div>
                </div>
                <div className="">
                    <Link to={{pathname:`/message/${user.uid}`}}>
                        <Button bsStyle="warning">SEND GREETINGS</Button>
                    </Link>
                </div>
            </Panel>

        </li>
    )
};

export default DashboardListItem;
