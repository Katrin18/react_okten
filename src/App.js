import React from 'react';

import './App.css';
import UserDetails from "./components/userDetails/UserDetails";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {useState} from "react";
import {postService} from "./services/post.service";

const App = () => {

    const [user, setUser] = useState([]);
    const [userId, setUserId] = useState([]);
    const [posts, setPosts] = useState([]);

    const getUser = (user) => {
        setUser(user)
        setPosts([])
    }
    const getUserId = (id) => {
        postService.getPosts(id).then(value => setPosts([...value]))
    }
    return (
        <div>
            <div className="wrap">
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {!!posts.length && <Posts posts={posts}/>}
        </div>
    );
};

export default App;
