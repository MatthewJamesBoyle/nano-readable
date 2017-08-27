import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchComments, addNewComment, editComment,deleteComment } from '../../../actions/comments';
import  CommentView from '../../presenters/CommentView/index'
import axios from 'axios';
import PostScore from '../../containers/PostScore/index';
import AddCommentView from '../../presenters/AddCommentView/index'
import uuid from 'uuid';


class CommentSection extends Component {
    componentDidMount () {
       this.props.dispatch(fetchComments(this.props.postId));
    }

    render() {
        const {comments,postId} = this.props; 
        const post = comments.allComments.find(c => c.postId === postId);   

        if(this.props.commentFlag === true){
            return (
                <div>Comments: {this.getCommentCount()}</div>
            )
        } else {
            return (
               (post ? 
                <div>
                    <AddCommentView handleSubmit={this.handleSubmit}/>
                    <hr/>
                    <div>Comment count: {post.commentCount}</div>
                    <hr/>
                    {
                post.comments.map( comment =>  
                            ( <div key={comment.id}>
                                    <CommentView comment={comment} deleteComment={this.onDeleteComment}/>
                                    <PostScore comment={true} id={comment.id}/>
                                    <hr/>
                                </div>
                            )
                        )
            }
                </div>    
                    : <div>
                        No comments yet!
                        <AddCommentView handleSubmit={this.handleSubmit}/>

                        </div>)
            )
        }   
    }

     getCommentCount = () => {
         const {postId, comments } = this.props;
         const comment = comments.allComments.find(c => c.postId === postId);
         if(comment === undefined) {
             return 0;
         }
         return comment.commentCount;
     }

     onDeleteComment = (e,commentId) => {
        e.preventDefault();
        this.props.dispatch(deleteComment(commentId));
    }


    handleSubmit = (event,comment,author) => {
        event.preventDefault();
        const newComment = {
            id: uuid(),
            timestamp: Date.now(), 
            body: comment,
            author: author,
            parentId: this.props.postId,
            voteScore: 0,
        }
        this.props.dispatch(addNewComment(this.props.postId,newComment));
    }
    
}




  const mapStateToProps = state => {
    const { Comments } = state;
    return {
      comments: Comments
    } 
  }
export default connect(mapStateToProps)(CommentSection);