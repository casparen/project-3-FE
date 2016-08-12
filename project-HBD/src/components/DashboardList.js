import React from 'react';
import DashboardListItem from './DashboardListItem'

const DashboardList = (props) => {
    const userList = props.users.map((user,i) => {
        return <DashboardListItem
            key={i}
            user={user}/>
    });
    return (
        <ul className="DashboardList">
            {userList}
        </ul>
    );
};

export default DashboardList;
