
import {
    ADD_CATEGORY, 
    } from '../actions/categories'


const intialCatState = [];
    
export default function categories(state = intialCatState , action) {
    switch(action.type) {
        case ADD_CATEGORY : 
            const { category } = action;
            return  [...state,category]
            
        default :
            return state;
    }
}

