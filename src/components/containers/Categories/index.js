import  React,  { Component } from 'react';
import axios from 'axios';
import {fetchCategories} from '../../../actions/categories';
import {filterPostsByCategory} from '../../../actions/posts'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CatView from '../../presenters/CatView/index';

 class Categories extends Component {
    componentDidMount() {
    this.props.dispatch(fetchCategories());
    }

    render () {
    const {categories} = this.props;
       return ( 
           <div className="categoriesRoot">
           <h1>Categories</h1>
           {categories.length ? 
            (
                categories.map( category => ( 
                   <CatView key={category.name} data ={category}/>
                    )
                )
            ):( 
                    <div>
                        There is currently no category data to display.
                     </div>
                )
            }

            </div>
    )};


}

  const mapStateToProps = state => {
    const { Categories } = state;
    return {
      categories: Categories
    } 
  }

export default withRouter(connect(mapStateToProps)(Categories));