import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import User from "../../components/user/User"
import {usersService} from "../../servies/users.service";
import './user.style.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        usersService.getAll().then(value => setUsers([...value]))
    })
    return (
        <div className='users'>
           <div><h1>Users</h1>
               {users.map(user => <User key={user.id} user={user}/>)}</div>
            <div className="outletUser"><Outlet/></div>
        </div>
    );
};

export default UsersPage;
