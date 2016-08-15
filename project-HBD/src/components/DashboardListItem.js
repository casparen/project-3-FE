import React from 'react';
import {Link} from 'react-router';
import {Button, Panel} from 'react-bootstrap';
import '../styles/dashboard.css';

const DashboardListItem = ({user}) => {
    // const user = this.props.user;
    return (
        <li className="profileStats">
            <Panel header={user.name} bsStyle="success">
                <div className="avatarContainer">
                    <img className="default" src="http://hackersworld.org/images/profile.png" role="presentation"/>
                </div>
                <div className="userInfoContainer">
                    Name: {user.name}
                    Birthday: {user.dob}
                    Mobile Number: {user.phone}
                    email: {user.email}
                </div>
                <div className="">
                    <Link to={{pathname:`/message/${user.uid}`}}>
                        <Button bsStyle="warning">Send a message</Button>
                    </Link>
                </div>
            </Panel>

        </li>
    )
};

export default DashboardListItem;
