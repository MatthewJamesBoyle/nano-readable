import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentPost, deletePost} from '../../../actions/posts';
import PostDetailView from '../../presenters/PostDetailView/index';
import {withRouter} from 'react-router-dom';


class PostDetail extends Component {
    componentDidMount(){
       this.props.dispatch(setCurrentPost(this.props.match.params.postid));
    }

    render(){
      const post = this.props.posts.currentPost;
      return (
            (post  ? <PostDetailView data={post} onDeletePressed={this.deletePost} /> : <div>Loading</div>)
        )
    }

    deletePost = (event,postId) => {
      event.preventDefault();
      this.props.dispatch(deletePost(postId));
     
    }
}



  const mapStateToProps = state => {
    const { Posts } = state
    return {
      posts: Posts
    } 
  }

  export default withRouter(connect(mapStateToProps)(PostDetail));