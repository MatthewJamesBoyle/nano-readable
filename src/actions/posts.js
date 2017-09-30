import * as API from '../utils/Api'
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const POSTS_REQUESTED = 'POSTS_REQUESTED';
export const POSTS_RECEIVED = 'POSTS_RECEIVED';
export const FILTER_POSTS = 'FILTER_POSTS';
export const SORT_POSTS = 'SORT_POSTS';

export const CURRENT_POST = 'CURRENT_POST';
export const CURRENT_POST_REQUESTED = 'CURRENT_POST_REQUESTED';
export const CURRENT_POST_RECEIVED = 'CURRENT_POST_RECEIVED';
export const UPDATE_POST = 'UPDATE_POST';


export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';


export const fetchPosts = () => dispatch => {
    dispatch(postRequested());
    return API.fetchPosts()
        .then(response => {
             response.data.forEach( post => dispatch(addPost(post)));
        })
        .then( () => dispatch(postsRecieived()))
}

 function postRequested(){
    return {
    type: POSTS_REQUESTED,
    }
}

export const sortPostsBy = (sortOn) => {
    return{
        type: SORT_POSTS,
        sortOn,
    }
}


function postsRecieived() {
    return {
        type: POSTS_RECEIVED,
    }
}

export function addPost(post){
    return {
        type: ADD_POST,
        post: post,
    }
}

export const newPost = (post) => dispatch => {
    API.addPost(post)
    .then(response => dispatch(addPost(post)));
}


export const deletePost =  (postId)  => dispatch => {
    return API.deletePost(postId)
    .then(response =>  dispatch(removePost(postId)));
  
}

export const filterPostsByCategory = catName => dispatch => {
    return API.filterPostsByCategory(catName)
        .then(response => dispatch(filterPosts(response.data)))
}

function filterPosts(posts){
    return {
        type: FILTER_POSTS,
        filteredPosts: posts,
    }
}

function removePost (postId) {
    return {
        type: REMOVE_POST,
        postId,
    }
}

 function currentPost (post) {
    return {
        type: CURRENT_POST,
        post,
    }
}

function currentPostRequested () {
    return {
        type: CURRENT_POST_REQUESTED,
    }
}

function currentPostRecieved () {
    return {
        type: currentPostRecieved,
    }
}


export const voteOnPost = (id,type) => dispatch => {
    API.updatePostScore(id,type)
        .then(response => {
            type === "upVote" ? dispatch(upvote(id)) : dispatch(downvote(id));                            
        }) 
}

export function upvote(postId) {
    return {
        type: UPVOTE,
        postId: postId,
    }
}


export function downvote(postId) {
    return {
        type: DOWNVOTE,
        postId: postId,
    }
}

function editPost(post) {
    return {
        type: UPDATE_POST,
        post,
    }
}

export const setCurrentPost = postId => dispatch => {
    dispatch(currentPostRequested())
    return API.fetchCurrentPost(postId)
            .then(response =>  dispatch(currentPost(response.data)))
            .then(() => dispatch(currentPostRecieved()))
}

export const updatePost = post => dispatch => {
    return API.updatePost(post)
            .then(response => dispatch(editPost(post)));
}
