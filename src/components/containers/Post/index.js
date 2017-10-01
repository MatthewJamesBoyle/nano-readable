import  React,  { Component } from 'react'
import { connect } from 'react-redux';
import {deletePost} from '../../../actions/posts';
import PostView from '../../presenters/PostView/index';
import AddPostSection from '../../containers/AddPostSection/index';
import {withRouter } from 'react-router-dom';


 class Post extends Component {
    
    render () {
    const {posts} = this.props;
           return ( 
           <div className="postsRoot">
                <div className="cards">
                {
                    posts.map( post =>  
                            ( <div key={post.id+post.className}>
                                <PostView data={{post}} timeposted={dateToTime(post.timestamp)} onDeletePressed={this.deletePost}/>
                                </div>
                            )
                        )
                }
                </div>
                <div className="addSection">
                    <AddPostSection/>
                </div>
            </div>
    )};

     deletePost = (event,postId) => {
        event.preventDefault();
        this.props.dispatch(deletePost(postId));
       
    }
}



const dateToTime = timestamp => {
    const date = new Date(timestamp);
    const minutes = (date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes());
    
        return `${date.getHours()}:${minutes}`
}



export default withRouter(connect()(Post));