import  React, { Component } from 'react';
import CatView  from '../CatView/index';
import PostDetailView from '../PostDetailView/index';


class Root extends Component {
    render =  () => (
        <div>
            <CatView/>
            <PostDetailView/>
        </div>
    );

} 

export default Root;