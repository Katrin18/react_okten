import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {id,postId,title,body}=comment;
    return (
        <div>
            <div>Id:{id}</div>
            <div>PostId:{postId}</div>
            <div>Title:{title}</div>
            <div>Body:{body}</div>

        </div>
    );
};

export default Comment;
