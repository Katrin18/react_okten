import React from 'react';

import {useEffect,useState} from "react";
import Comment from '../comment/Comment'

const Comments = () => {
    const [comments,setComments]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    },[])
    return (
        <div className="Comments">
            {comments.map(value => <Comment key={value.id}
                                            postId={value.postId}
                                            id={value.id}
                                            name={value.name}
                                            email={value.email}
                                            body={value.body}/>)}
        </div>
    );
};

export default Comments;
