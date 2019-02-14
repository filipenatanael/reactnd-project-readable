import { connect } from 'react-redux';
import {
  fetchPost,
  deletePost,
  createComment,
} from '../actions';

import PostDetail from '../components/PostDetail'

function mapStateToProps (state, ownProps) {
  return {
    post: state.posts[ownProps.match.params.id],
  }
}

export default connect(
  mapStateToProps, {
    fetchPost,
    deletePost,
    createComment,
  })(PostDetail);
