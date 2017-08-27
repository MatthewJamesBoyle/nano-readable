import React from 'react';
import PostScore from '../../containers/PostScore/index';

const CommentView = props => {
    const {comment,deleteComment,editComment} = props;
    console.log(props);
    return (
        <div>
        {comment.body}
        <br/>
        {comment.author}
        <br/>
        score: {comment.voteScore}
        <br/>
        <a href="#" onClick={e => editComment(e,comment)}>Edit</a>
        <br/>
        <a href="#" onClick={ e => deleteComment(e,comment.id) }>Delete</a>
        </div>
    )
};

    
export default CommentView;