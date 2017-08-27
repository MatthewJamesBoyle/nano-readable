import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/containers/RootView/index'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter} from 'react-router-dom';



ReactDOM.render(<Provider store={store}>
<BrowserRouter>
    <Root />
</BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();



