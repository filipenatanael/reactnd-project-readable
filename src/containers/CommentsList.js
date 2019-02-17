import { connect } from 'react-redux';
import _ from 'lodash';
import {
  fetchComments,
  createComment,
  deleteComment,
} from '../actions';

import CommentsList from '../components/CommentsList';

function mapStateToProps(state) {
  const comments = _.filter(state.comments, comment => !comment.deleted)
  return {
    comments
  }
}

export default connect(mapStateToProps, {
  fetchComments,
  createComment,
  deleteComment,
})(CommentsList);
