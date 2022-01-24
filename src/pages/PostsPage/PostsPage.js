import React from 'react';
import {useState, useEffect} from "react";
import {postsService} from "../../servies/posts.service";
import Post from "../../components/post/Post";
import {Outlet} from "react-router-dom";
import './post.style.css';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postsService.getAll().then(value => setPosts([...value]))
    })
    return (
        <div className='post'>
            <div className='posts'> <h1>Posts</h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div className="outletPost"><Outlet/></div>
        </div>
    );
};

export default PostsPage;
