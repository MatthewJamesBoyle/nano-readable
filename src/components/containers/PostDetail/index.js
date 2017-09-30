import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentPost} from '../../../actions/posts';
import PostDetailView from '../../presenters/PostDetailView/index';
import {withRouter} from 'react-router-dom';


class PostDetail extends Component {
    componentDidMount(){
       this.props.dispatch(setCurrentPost(this.props.match.params.postid));
    }

    render(){
      const post = this.props.posts.currentPost;
      return (
            (post  ? <PostDetailView data={post}  /> : <div>Loading</div>)
        )
    }
}

  const mapStateToProps = state => {
    const { Posts } = state
    return {
      posts: Posts
    } 
  }

  export default withRouter(connect(mapStateToProps)(PostDetail));