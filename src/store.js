import { combineReducers } from 'redux';
import CatReducer from './CatView/reducer';
import PostReducer from './PostDetailView/reducer';
import { createStore } from 'redux';



const reducers = combineReducers( {
    CatReducer,
    PostReducer,
});

 const store = createStore(
    reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());    

export default store;