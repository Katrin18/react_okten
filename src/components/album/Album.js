import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Album = ({album}) => {
    const {userId,id,title}=album;
    return (
        <div className='photo'>
            <div>UserId:{userId}</div>
            <div>Id:{id}</div>
            <div>Title:{title}</div>
            <Link to={`${id}/photos`}>
                <button>Photos</button>
            </Link>
            <div ><Outlet/></div>
        </div>
    );
};

export default Album;
