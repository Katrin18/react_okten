import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id, name} = user;
    return (
        <div>
            <div>
                <Link to={id+''} state={user}>{id}-{name}</Link>
            </div>
        </div>

    );
};

export default User;
