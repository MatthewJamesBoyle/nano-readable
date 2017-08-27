import React from 'react';
import PostScore from '../../containers/PostScore/index';
import CommentSection from '../../containers/Comments/index';
import {Link} from 'react-router-dom';

const PostDetailView = props => (
    <div className="post">
    <Link to={'/'}>Home</Link>
        <div className="postTitle">{props.data.title}</div>
        <div className="postBody">{props.data.body}</div>
        <div className="author">{props.data.author}</div>
        <div className="commentSection">
            <span className="voteScore">Score: <PostScore score={props.data.voteScore} id={props.data.id} /></span>
        
            <div className="commentSection">
               {props.data.id !== undefined ?  <CommentSection postId={props.data.id} /> : <div> comments loading</div>}
            </div>
        </div>
      
    </div>
);

export default PostDetailView;