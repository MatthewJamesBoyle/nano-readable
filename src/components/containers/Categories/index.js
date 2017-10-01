import  React,  { Component } from 'react';
import {fetchCategories} from '../../../actions/categories';
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
           <h3 className="categoryTinyFont">Categories</h3>
           {categories.length ? 
            (
                categories.map( category => ( 
                   <CatView  key={category.name} data ={category}/>
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