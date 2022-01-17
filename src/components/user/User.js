import React from 'react';
import style from './style.css'

const User = ({user, getUser}) => {
    const {id, name} = user;
    return (
        <div className="wrap">
            <div>{id}--{name}</div>
            <button onClick={() => getUser(user)}>GetDetails</button>
        </div>
    );
};

export default User;
