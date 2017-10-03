import  React,  { Component } from 'react'
import {connect} from 'react-redux';
import {voteOnPost} from '../../../actions/posts';
import {voteOnComment} from   '../../../actions/comments';
import FlatButton from 'material-ui/FlatButton';
import {withRouter} from 'react-router-dom';


 class PostScore extends Component {

    render () {
        const commentOrPost =  this.props.comment ?  voteOnComment : voteOnPost; 
        return(
            <div className="postScoreContainer">
                <FlatButton label=":)" primary={true} className="voteButton" onClick={()=>this.props.dispatch(commentOrPost(this.props.id,"upVote"))}/>
                       <div className="score"> {this.props.score}</div>
                <FlatButton label=":(" secondary={true} onClick={()=>this.props.dispatch(commentOrPost(this.props.id,"downVote"))}/> 
            </div>
        )
    }
}

export default withRouter(connect()(PostScore));