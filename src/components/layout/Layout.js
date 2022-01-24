import React from 'react';
import {Link, Outlet,NavLink} from "react-router-dom";
import './layout.style.css'

const Layout = () => {
    return (
        <>
            <div className="wrap">
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
            <div className="footer">
                @ReactRouterDom
            </div>
        </>

    );
};

export default Layout;
