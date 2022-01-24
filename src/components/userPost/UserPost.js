import React from 'react';
import {Link} from "react-router-dom";

const UserPost = ({userPost}) => {
    const {id,postId,title,body}=userPost;
    return (
        <div>
            <div>Id:{userPost.id}</div>
            <div>UserId:{userPost.userId}</div>
            <div>Title:{userPost.title}</div>
            <div>Body:{userPost.body}</div>
        </div>
    );
};

export default UserPost;
