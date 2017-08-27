
import {
    ADD_POST,
    REMOVE_POST 
    } from './actions'

    const intialPostState = {
        posts:[],
    }
    
export default function posts(state = intialPostState , action) {
    switch(action.type) {
        case ADD_POST : 
            const { post } = action;
          return {
              ...state,
             posts: [...state.posts,post],
             
          }
        case REMOVE_POST : 
            return {
                ...state,
            }
        default :
            return state;
    }
}

