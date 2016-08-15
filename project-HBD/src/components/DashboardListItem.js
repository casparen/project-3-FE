import React from 'react';
import {Link} from 'react-router';
import '../styles/dashboard.css';
import { Button } from 'react-bootstrap';

const DashboardListItem = ({user}) => {
    // const user = this.props.user;
    return (
        <li className="profileStats">
            <div><img className="default" src="http://hackersworld.org/images/profile.png" role="presentation"/></div>
            <div>
                Name: {user.name} 
                Birthday: {user.dob}
                Mobile Number: {user.phone}
                email: {user.email}
            </div>
            <div>
                <Link to={{pathname:`/message/${user.uid}`}}>
                    <Button bsStyle="warning">Send a message</Button>
                </Link>
            </div>
        </li>
    )
};

export default DashboardListItem;
