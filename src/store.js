import { combineReducers,applyMiddleware } from 'redux';
import Categories from './reducers/categories';
import Posts from './reducers/posts';
import { createStore } from 'redux';
import  Comments  from './reducers/comments';
import thunk from 'redux-thunk';




const reducers = combineReducers( {
    Categories,
    Posts,
    Comments
});

 const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)    
);    

export default store;