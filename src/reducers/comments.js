import { ADD_COMMENT,
        COMMENTS_RECEIVED, 
        COMMENTS_REQUESTED,
        UPVOTE,
        DOWNVOTE,
        REMOVE_COMMENT ,
        CURRENT_COMMENT,
     } from '../actions/comments'


const initialState = {
    currentComment: null,
    allComments: [],
    isFetching: true,
};

export default function comments(state = initialState, action) {
    const { postId, comment } = action;
    
    switch(action.type) {
        case ADD_COMMENT : 
        if(state.allComments.find(c => c.postId === postId)) {

            const newAC =  state.allComments.map(post => {
                if(post.postId === postId) {
                    post.comments = [...post.comments, comment];
                    post.commentCount+=1;
                }

                return post;
            })

            return {
                ...state,
                allComments: newAC,
            }
        } else {

            return {
                ...state,
                allComments: [
                    {
                        postId: postId,
                        comments: [comment],
                        commentCount: 1,
                    }
                ]
            }
        }
            case UPVOTE :
            case DOWNVOTE :
            const toReturn = state.allComments.map( post => {
               return {
                   ...post, 
                   commentCount: post.commentCount--,                   
                   comments: post.comments.map(comment => {
                                if (comment.id === action.commentId){
                                     action.type === UPVOTE ? comment.voteScore++ : comment.voteScore--;
                                }
                    
                                return comment;
                            })
                    }
            })
        
            return {
            ...state,
            allComments: toReturn,
            
            };
        
        case REMOVE_COMMENT :
        const {commentId} = action;
        const returned = state.allComments.map( post => {
            return {
                ...post, 
                comments: post.comments.filter(comment => comment.id !== commentId )
                
                 }
        });
        return {
            ...state,
            allComments: returned,
        }

        case CURRENT_COMMENT :
        return {
            ...state,
            currentComment: action.comment,
        }

        case COMMENTS_REQUESTED :
        return{ 
            ...state,
            isFetching: true,
        }
        case COMMENTS_RECEIVED :
        return{ 
            ...state,
            isFetching: false,
        }
                
        default :
            return state;
    }
}