import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterPostsByCategory} from '../../../actions/posts'
import Post from '../../containers/Post/index';
import {Link,withRouter} from 'react-router-dom';

class FilteredContainer extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        const catName = this.props.match.params.category;

        dispatch(filterPostsByCategory(catName));
    }
    render(){
        return (
            <div>
                <Link to="/">Home</Link>
                <Post posts={this.props.posts.allPosts}/>
            </div>
        )
}
}

const mapStateToProps = state => {
    const { Posts } = state
    return {
      posts: Posts
    } 
  }

export default withRouter(connect(mapStateToProps)(FilteredContainer));

