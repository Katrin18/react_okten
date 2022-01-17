import React from 'react';

const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div className='wrap'>
            <div>{id}--{name}--{username}--{email}</div>
        </div>
    );
};

export default User;
