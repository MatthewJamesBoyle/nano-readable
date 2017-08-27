import * as API from '../utils/Api';

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const COMMENTS_RECEIVED = 'COMMENTS_RECEIVED';
export const COMMENTS_REQUESTED = 'COMMENTS_REQUESTED';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const CURRENT_COMMENT = 'CURRENT_COMMENT';




 function addComment(postId, commentToAdd ) { 
        return {
            type: ADD_COMMENT,
            postId,
            comment: commentToAdd,
        }
    }

export function removeComment(postId, commentToDelete ) { 
        return {
            type: DELETE_COMMENT,
            postId,
            comment: commentToDelete,
        } 
    }

function commentsRequested() {
    return {
        type: COMMENTS_REQUESTED,
    }
}    

function commentsReceived() {
    return {
        type: COMMENTS_RECEIVED,
    }
} 
export const fetchComments = (postId) => dispatch => {
    dispatch(commentsRequested());
        return API.fetchComments(postId)
            .then(response => {
                 response.data.forEach( post => dispatch(addComment(postId,post)));
            })
            .then( () => dispatch(commentsReceived()))
    }

    export const addNewComment = (postId,comment) => dispatch => {
        return API.addComment(comment)
        .then(response =>{
               dispatch(addComment(postId,comment));
        })
    }
    


    export const voteOnComment = (id,type) => dispatch => {
        API.updateCommentScore(id,type)
            .then(response => {
                type === "upVote" ? dispatch(upvote(id)) : dispatch(downvote(id));                            
            }) 
    }

    export function upvote(commentId) {
        return {
            type: UPVOTE,
            commentId: commentId,
        }
    }

    export const editComment = (comment) => dispatch => {
        API.editComment(comment)
        .then(dispatch(updateComment(comment)));
    }

    function updateComment(comment) {
        return{
            type: UPDATE_COMMENT,
            comment,
        }
    }
    
    
    
    export function downvote(commentId) {
        return {
            type: DOWNVOTE,
            commentId: commentId,
        }
    }

    function removeComment(commentId) {
        return {
            type: REMOVE_COMMENT,
            commentId,
        }
    }
    
    export const deleteComment = (commentId) => dispatch => {
        API.deleteComment(commentId)
        .then(dispatch(removeComment(commentId)));
    }

    export const setCurrentComment = commentId => dispatch => {
        dispatch(commentsRequested())
        return API.fetchCurrentComment(commentId)
                .then(response =>  dispatch(currentComment(response.data)))
                .then(() => dispatch(commentsReceived))
    }



    function currentComment (comment) {
        return {
            type: CURRENT_COMMENT,
            comment,
        }
    }