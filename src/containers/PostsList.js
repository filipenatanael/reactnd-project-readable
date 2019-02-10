import { connect } from 'react-redux';
import _ from 'lodash';
import {
  fetchPosts,
  fetchCategoryPosts,
  postSortOrder,
  deletePost
} from '../actions';

import PostsList from '../components/PostsList'

function mapStateToProps (state) {
    const postsFiltered = _.filter(state.posts, post => !post.deleted);
    return {
      posts: postsFiltered,
      postsOrder: state.postsOrder
    }
  }

export default connect(
  mapStateToProps, {
    fetchPosts,
    fetchCategoryPosts,
    postSortOrder,
    deletePost })(PostsList);
