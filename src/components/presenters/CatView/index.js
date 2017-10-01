import React from 'react';
import {Link} from 'react-router-dom';

const CatView = props => {
   const  {name} = props.data;
    return (
        <div className="category">
            <Link to={`/${name}`} className="categoryTinyFont">{name}</Link>
        </div>
    )
}


export default CatView;

