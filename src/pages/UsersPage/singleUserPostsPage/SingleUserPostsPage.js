import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postsService} from "../../../servies/posts.service";
import {userPostsService} from "../../../servies/userposts.service";
import Comment from "../../../components/comment/Comment";
import UserPost from "../../../components/userPost/UserPost";

const SingleUserPostsPage = () => {
    const {id} = useParams();
    const [userPosts, setUserPosts] = useState(null);
    const {state} = useLocation();
    useEffect(() => {
        if (state) {
            setUserPosts(state)
            return
        }
        userPostsService.getById(id).then(value =>  setUserPosts([...value]))
    }, [id])


    return (
        <div>
            <h1>Posts</h1>
            {userPosts && userPosts.map(userPost=><UserPost key={userPost.id} userPost={userPost}/>)}
        </div>
    );
};

export default SingleUserPostsPage;
