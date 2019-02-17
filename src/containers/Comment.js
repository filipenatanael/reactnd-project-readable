import { connect } from 'react-redux';
import _ from 'lodash';
import {
  fetchComments,
  deleteComment,
  voteForComment,
  editComment,
  fetchPost
} from '../actions';

import Comment from '../components/Comment';

function mapStateToProps(state) {
  const comments = _.filter(state.comments, comment => !comment.deleted)
  return {
    comments
  }
}

export default connect(mapStateToProps, {
  fetchComments,
  deleteComment,
  voteForComment,
  editComment,
  fetchPost
})(Comment);
