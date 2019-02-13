import { connect } from 'react-redux';
import _ from 'lodash';
import {
  fetchPostComments,
  deleteCommentPost,
} from '../actions';

import CommentsList from '../components/CommentsList';

function mapStateToProps(state) {
  const comments = _.filter(state.comments, comment => !comment.deleted)
  return {
    comments
  }
}

export default connect(mapStateToProps, {
  fetchPostComments,
  deleteCommentPost
})(CommentsList);
