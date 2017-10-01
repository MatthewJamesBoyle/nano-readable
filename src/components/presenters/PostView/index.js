import React from 'react';
import {Link} from 'react-router-dom';
import PostScore from '../../containers/PostScore';
import CommentSection from '../../containers/Comments/index';
import FlatButton from 'material-ui/FlatButton';


const PostView = props => {
const {post} = props.data;
const {timeposted,onDeletePressed} = props;
    return(
    <div className="card"> 
         <div className="postScore">
            <PostScore score={post.voteScore} id={post.id} />
        </div>                                    
        <div className="postTitle"><Link to={`/${post.category}/${post.id}`}>{post.title}</Link></div>
           <div className="postBody">{post.body}</div>
            <div className="postAuthor">Author: {post.author}</div>           
            <div className="postTime"> Posted at: {timeposted}</div>  
            <CommentSection postId={post.id} commentFlag={true}/>       
                <div className="EditAndDeleteButtons">
                <Link to={`/post/${post.id}/edit`}><FlatButton label="Edit" primary={true}/></Link>
                  <FlatButton label="Delete" secondary={true} onClick={(e) => onDeletePressed(e,post.id)}/>
                </div>       
    </div>   
    );
}

export default PostView;