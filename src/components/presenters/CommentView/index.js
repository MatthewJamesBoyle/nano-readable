import React from 'react';
import {Link} from 'react-router-dom';

const CommentView = props => {
    const {comment,deleteComment} = props;
    return (
        <div>
        {comment.body}
        <br/>
        {comment.author}
        <br/>
        score: {comment.voteScore}
        <br/>
        <Link to={`/magicmadeuppath/${comment.id}/editing`}>Edit</Link>
        <br/>
        <a  onClick={ e => deleteComment(e,comment.id) }>Delete</a>
        </div>
    )
};

    
export default CommentView;