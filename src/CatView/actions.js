export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';

export function addCategory (category) {
    return {
        type: ADD_CATEGORY,
        name: category,
    }
}

export function removeCategory (category) {
    return {
        type: REMOVE_CATEGORY,
        category,
    }
}
