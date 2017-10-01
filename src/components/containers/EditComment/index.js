import React, { Component } from 'react';
import {connect} from 'react-redux';
import EditCommentView from '../../presenters/EditCommentView/index';
import {editComment,setCurrentComment} from '../../../actions/comments';

class EditComment extends Component {
    componentDidMount() {
        const {commentId} = this.props.match.params;
        const {dispatch} = this.props;
        dispatch(setCurrentComment(commentId));   
    }
    
    
    render() {  
        const {comments} = this.props;
        { if(comments.isFetching  === false && comments.currentComment )
            return (
            <EditCommentView comment={comments.currentComment} onEditPressed={this.editSubmitted}/>
            )
        }
        return (
            <div>Loading Comment</div>
        )
        

    }

    editSubmitted = (e,comment) => {
        e.preventDefault();
        this.props.dispatch(editComment(comment));
    }
}


const mapStateToProps = state => {
    const { Comments } = state;
    return {
      comments: Comments
    } 
  }

export default connect(mapStateToProps)(EditComment);