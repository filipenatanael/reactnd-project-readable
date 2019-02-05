import { connect } from 'react-redux';
import {
  fetchCategories,
  fetchCategoryPosts
} from '../actions';

import Categories from '../components/Categories'

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, {
  fetchCategories,
  fetchCategoryPosts
})(Categories);
