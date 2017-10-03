import React from 'react';
import PostScore from '../../containers/PostScore/index';
import CommentSection from '../../containers/Comments/index';
import {Link} from 'react-router-dom';

const PostDetailView = props => (
    <div className="post">
    <Link to={'/'}>Home</Link>
        <div className="topDetailPostSection">
            <div className="postTitle">{props.data.title}</div>
            <div className="postDetailBody">{props.data.body}</div>
            <div className="author"> Author: {props.data.author}</div>
            <span className="postScore">Score: <PostScore score={props.data.voteScore} id={props.data.id} /></span>
        </div>
        
            <div className="commentSection">
               {props.data.id !== undefined ?  <CommentSection postId={props.data.id} /> : <div> comments loading</div>}
            </div>      
    </div>
);

export default PostDetailView;