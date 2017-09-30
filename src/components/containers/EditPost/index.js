import React, { Component } from 'react';
import {connect} from 'react-redux';
import EditPostView from '../../presenters/EditPostView/index';
import {setCurrentPost,updatePost} from '../../../actions/posts';

class EditPost extends Component {
    componentDidMount() {
        const {postId} = this.props.match.params;
        const {dispatch} = this.props;
        dispatch(setCurrentPost(postId));
    }
    
    
    render() {  
        const {posts} = this.props;  
        { if(posts.isFetching  === false )
            return (
            <EditPostView post={posts.currentPost} onEditPressed={this.editSubmitted}/>
            )
        }
        return (
            <div>Loading Post</div>
        )
        

    }

     editSubmitted = (event,editedPost) => {
        event.preventDefault();
        this.props.dispatch(updatePost(editedPost));
    }
}


const mapStateToProps = state => {
    const { Posts } = state;
    return {
      posts: Posts
    } 
  }

export default connect(mapStateToProps)(EditPost);