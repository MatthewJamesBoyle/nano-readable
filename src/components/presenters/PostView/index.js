import React from 'react';
import {Link} from 'react-router-dom';
import PostScore from '../../containers/PostScore';
import CommentSection from '../../containers/Comments/index';

const PostView = props => {
const {post} = props.data;
const {timeposted,onDeletePressed} = props;
    return(
    <div className="card">                                    
        <div className="postTitle"><Link to={`/${post.category}/${post.id}`}>{post.title}</Link></div>
           <div className="postBody">{post.body}</div>
            <div className="postAuthor">Author: {post.author}</div>      
             <div className="postScore">
                Score: <PostScore score={post.voteScore} id={post.id} />
             </div>      
            <div className="postTime"> Posted at: {timeposted}</div>  
            <CommentSection postId={post.id} commentFlag={true}/>       
                <div>
                  <Link to={`/post/${post.id}/edit`}>Edit</Link>  
                  <br/> 
                  <a  href="" onClick={(e) => onDeletePressed(e,post.id)}>delete</a>
                </div>       
    </div>   
    );
}

export default PostView;