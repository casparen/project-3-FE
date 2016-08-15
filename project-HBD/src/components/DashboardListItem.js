import React from 'react';
import {Link} from 'react-router';
import {Button, Panel, Well} from 'react-bootstrap';
import '../styles/dashboard.css';

const DashboardListItem = ({user}) => {
    // const user = this.props.user;
    return (
        <li className="dashboardListItem">
            <Panel header={user.name} bsStyle="success">
                <div className="dashboard-panel">
                    <div className="avatarContainer">
                        <img className="dashboardAvatar" src="http://hackersworld.org/images/profile.png" role="presentation"/>
                    </div>
                    <div className="userInfoContainer">
                        <div className="tagContainer">
                            <span>Name:</span><span>{user.name}</span>
                        </div>
                        <div className="tagContainer">
                            <span>Email:</span><span>{user.email}</span>
                        </div>
                        <div className="tagContainer">
                            <span>Mobile:</span><span>{user.phone}</span>
                        </div>
                        <div className="tagContainer">
                            <span>Birthday:</span><span>{user.dob}</span>
                        </div>
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
