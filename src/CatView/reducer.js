
import {
    ADD_CATEGORY,
    REMOVE_CATEGORY 
    } from './actions'


const intialCatState = {
    categories:[],
}

    
export default function categories(state = intialCatState , action) {
    switch(action.type) {
        case ADD_CATEGORY : 
            const { name } = action;
            return  {
                ...state,
                categories: [...state.categories,name],
            }  
            
        default :
            return state;
    }
}

