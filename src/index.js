import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './RootView/index'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import {addCategory} from './CatView/actions'
import {addPost} from './PostDetailView/actions'


ReactDOM.render(<Provider store={store}>
    <Root />
</Provider>, document.getElementById('root'));
registerServiceWorker();

console.log(store.getState());
store.dispatch(addCategory('Learn about actions'))
console.log(store.getState());

store.dispatch(addCategory('Learn about reducers'))
console.log(store.getState());

store.dispatch(addCategory('Learn about store'))
console.log(store.getState());

console.log(store.getState());
store.dispatch(addPost('Learn about actions'))
console.log(store.getState());

store.dispatch(addPost('Learn about reducers'))
console.log(store.getState());

store.dispatch(addPost('Learn about store'))
console.log(store.getState());



