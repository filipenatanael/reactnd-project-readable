import { connect } from 'react-redux';
import {
  fetchPost,
  editPost,
} from '../actions';

import EditPost from '../components/EditPost';

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.match.params.id],
    categories: state.categories,
  }
}

export default connect(mapStateToProps, { fetchPost, editPost })(EditPost);
