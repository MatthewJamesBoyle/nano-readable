import * as API from '../utils/Api'

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';

function addCategory (category) {
    return {
        type: ADD_CATEGORY,
        category,
    }
}

export const fetchCategories = () => dispatch => {
    return API.fetchCategories()
        .then(response => response.data.categories.forEach(cat => {
            dispatch(addCategory(cat));
            })
        );
}


export function removeCategory (category) {
    return {
        type: REMOVE_CATEGORY,
        category,
    }
}
