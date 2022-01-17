import React from 'react';

import {useState} from "react";
import {useEffect} from "react";
import {userService} from "../../services/user.service";
import User from "../user/User";


const Users = ({getUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value))
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export default Users;
