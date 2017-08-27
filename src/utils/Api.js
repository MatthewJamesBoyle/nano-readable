
import axios from 'axios'
const API_URL = 'http://localhost:3001'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'whatever'
}

export const fetchCategories = () => {
    return axios.get(`${API_URL}/categories`, { headers })
}

export const fetchPosts = () => {
    return axios.get(`${API_URL}/posts`, { headers })
}

export const filterPostsByCategory = category => {
    return  axios.get(`${API_URL}/${category}/posts`, { headers })
}

export const fetchCurrentPost = postId => {
    return axios.get(`${API_URL}/posts/${postId}`, { headers})
}

export const fetchCurrentComment = commentId => {
    return axios.get(`${API_URL}/comments/${commentId}`, { headers})
}

export const updatePostScore = (postId, type) => {
    const params = {"option":type};     
    return axios.post(`${API_URL}/posts/${postId}`, params, {headers} );
}

export const updateCommentScore = (commentId, type) => {
    const params = {"option":type};     
    return axios.post(`${API_URL}/comments/${commentId}`, params, {headers} );
}

export const addPost = post => {
    return axios.post(`${API_URL}/posts`,post, {headers});
}

export const updatePost = post => {
    const postToUpdate = {
        title: post.title,
        body: post.body,
    }
    return axios.put(`${API_URL}/posts/${post.id}`,postToUpdate,{headers});
}

export const editPost = post => {
    return fetch(`${API_URL}/${post.id}`, {
        headers,
        method: 'PUT',
        body: JSON.stringify({
            title: post.title,
            body: post.body
        })
    })
}

export const deletePost = postId => {    
    return axios.delete(`${API_URL}/posts/${postId}`, {headers} );
}

export const fetchComments = postId => {
    return axios.get(`${API_URL}/posts/${postId}/comments`, { headers })
}

export const addComment = comment => {
    return axios.post(`${API_URL}/comments`, comment, {headers} );
}


export const editComment = comment => {
   
    const commentToUpdate = {
        timestamp: Date.now(),
        body: comment.body,
    }
    return axios.put(`${API_URL}/comments/${comment.id}`,commentToUpdate,{headers});
}


export const deleteComment = commentId => {    
    return axios.delete(`${API_URL}/comments/${commentId}`, {headers} );
}