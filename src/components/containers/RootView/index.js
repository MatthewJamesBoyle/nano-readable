import  React, { Component } from 'react';
import Categories  from '../Categories/index';
import Post from '../Post/index';
import { connect } from 'react-redux';
import {fetchPosts, sortPostsBy} from '../../../actions/posts';
import {withRouter,Route } from 'react-router-dom';
import PostDetail from '../PostDetail/index';
import FilteredContainer from '../FilteredContainer/index';
import EditPost from '../EditPost/index';
import EditComment from '../EditComment/index';

class Root extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());    
  }
    render () {
      const {posts} = this.props
        return (
          <div className="app">
            <Route exact path="/" render={({history})=>  
               <div>

                  <div className="topBar"> 
                    <div className="title">MatterNews</div>
                  </div>
                <div className="sortSection">
                  <div> sort by: 
                      <a onClick={e => this.sortPosts(e,'timestamp')}> Date</a>  
                      <a onClick={e => this.sortPosts(e,'title')}> Title</a>  
                      <a onClick={e => this.sortPosts(e,'voteScore')}> Score</a>    
                      </div>
                </div>
                <div className="categorySection">
                    <Categories/>
                </div>
              {!posts.isFetching ? 
                 <Post posts={posts.allPosts}/> :
                 <div>Loading posts from API...</div>
              }
                 
            </div>
          }/>

          <Route exact path ={"/:category/:postid"} component={PostDetail} />
          <Route exact path ={"/:category"} render={(props) => (
            <FilteredContainer  {...props}/>
          )} />
          <Route exact path ={"/post/:postId/edit"} render={(props) => (
            <EditPost  {...props}/>
          )} />
          <Route exact path ={"/magicmadeuppath/:commentId/editing"} render={(props) => (
            <EditComment  {...props}/>
          )} />

          </div>
          
        )};
    sortPosts = (e,sortPostsOn) => {
      e.preventDefault();
      this.props.dispatch(sortPostsBy(sortPostsOn));
    }


}

  const mapStateToProps = state => {
    const { Posts } = state
    return {
      posts: Posts
    } 
 
  }
export default withRouter(connect(mapStateToProps)(Root));