import  React,  { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {voteOnPost} from '../../../actions/posts';
import {voteOnComment} from   '../../../actions/comments';

 class PostScore extends Component {

    render () {
        const commentOrPost =  this.props.comment ?  voteOnComment : voteOnPost; 
        return(
            <div>
                <button onClick={()=>this.props.dispatch(commentOrPost(this.props.id,"upVote"))}>^</button>
                        {this.props.score}
                <button onClick={()=>this.props.dispatch(commentOrPost(this.props.id,"downVote"))}>v</button> 
            </div>
        )
    }
}

export default connect()(PostScore);