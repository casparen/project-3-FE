import React from 'react';
import {Link} from 'react-router';

const DashboardListItem = ({user}) => {
    return (
        <li>
            <div>Profile Pic</div>
            <div>
                Name: {user.name}
                Birthday: {user.dob}
                Mobile Number: 
                email: {user.email}
            </div>
            <div>
                <Link to='/message'>
                    <button>Link to message</button>
                </Link>
            </div>
        </li>
    )
}

export default DashboardListItem;
