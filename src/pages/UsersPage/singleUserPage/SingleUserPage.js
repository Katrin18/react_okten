import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {usersService} from "../../../servies/users.service";

const SingleUserPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState([]);
    const {state}=useLocation();
    useEffect(() => {
        if(state){
            setUser(state)
            return
        }
        usersService.getById(id).then(value => setUser({...value}))
    }, [])


    return (
        <div>
            {user && (
                <div>
                    <div>Id:{user.id}</div>
                    <div>Name:{user.name}</div>
                    <div>UserName:{user.username}</div>
                    <div>Email:{user.email}</div>
                </div>
            )}
            <Link to={'posts'}>
                <button>UserDetails</button>
            </Link>
            <Link to={'albums'}>
                <button>Albums</button>
            </Link>
            <div ><Outlet/></div>
        </div>
    );
};

export default SingleUserPage;
