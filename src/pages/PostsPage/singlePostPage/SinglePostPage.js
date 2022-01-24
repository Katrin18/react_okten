import React from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {postsService} from "../../../servies/posts.service";
import {commentsService} from "../../../servies/comments.service";
import CommentsPage from "../../CommentsPage/CommentsPage";


const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();
    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postsService.getById(id).then(value => setPost({...value}))
    }, [id])


    return (
        <div>
            {post && (
                <div className='singlePost'>
                    <div>Id:{post.id}</div>
                    <div>UserId:{post.userId}</div>
                    <div>Title:{post.title}</div>
                    <div>Body:{post.body}</div>
                </div>
            )}
            <Link to={'comments'}>
                <button>PostDetails</button>
            </Link>
            <div className='OutletComment'><Outlet/></div>
        </div>
    );
};

export default SinglePostPage;
