import sortBy from 'sort-by';

import {
    ADD_POST,
    REMOVE_POST,
    UPVOTE,
    DOWNVOTE,
    CURRENT_POST,
    POSTS_REQUESTED,
    POSTS_RECEIVED,
    FILTER_POSTS,
    UPDATE_POST,
    SORT_POSTS,
    } from '../actions/posts'

    const intialPostState = {
        currentPost : {},
        allPosts: [],
        isFetching: true,
    };

    
export default function posts(state = intialPostState , action) {    
    switch(action.type) { 
        case POSTS_REQUESTED :
           return{ 
               ...state,
               isFetching: true,
           }
           case POSTS_RECEIVED :
           return{ 
               ...state,
               isFetching: false,
           }

        case ADD_POST : 
            const { post } = action;
          return {
              ...state,
              allPosts: [...state.allPosts,{
                  ...post,
                  voteScore: 0,
              }], 
          }
        
        case REMOVE_POST : 
         const { postId } = action;        
            return {
                ...state,
                allPosts: state.allPosts.filter(post => post.id !== postId),
            }
        case CURRENT_POST :
           return {
               ...state,
               allPosts: state.allPosts,
               currentPost: action.post,
           }

        case UPVOTE :
        case DOWNVOTE :
            const newAllPosts = state.allPosts.map(post => {
                if (post.id === action.postId ) {
                    action.type === UPVOTE ? post.voteScore++ : post.voteScore--;
                }
                return post;
            });

            return{
                ...state,
                allPosts: newAllPosts,
            }

        case FILTER_POSTS:
            const {filteredPosts} = action;
                return{
                    ...state,
                    allPosts: filteredPosts,
                }

        case UPDATE_POST:

                return {
                    ...state,
                    allPosts: state.allPosts.map( post => {
                        if(post.id === action.post.id) {
                            post.title = action.post.title;
                            post.body = action.post.body;
                        }
                        return post;
                    })
                }
                case SORT_POSTS:
                    return {
                        ...state,
                        allPosts: state.allPosts.sort(sortBy(action.sortOn)),
                    }
                
        default :
            return state;
    }
}

