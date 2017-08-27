import React from 'react';
import {Link} from 'react-router-dom';

const CatView = props => {
   const  {name} = props.data;
    return (
        <div>
            <Link to={`/${name}`}>{name}</Link>
        </div>
    )
}


export default CatView;

