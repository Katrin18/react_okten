import React from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import {commentsService} from "../../servies/comments.service";
import Comment from "../../components/comment/Comment";

const CommentsPage = () => {
    const {id}=useParams();
    const [comments,setComments]=useState(null);

    useEffect(()=>{
        commentsService.getById(id).then(value => setComments([...value]))
    },[id])
    return (
        <div>
            <h1>Comments</h1>
            {comments && comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;
