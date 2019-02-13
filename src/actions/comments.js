import axios from 'axios';
import _ from 'lodash';
import { BASE_URL } from '../resources/constants';
import {
  FETCH_POST_COMMENTS_COUNT,
  FETCH_POST_COMMENTS,
  COMMENT_POST_WAS_DELETED,
} from './types';

axios.defaults.headers.common['Authorization'] = { 'Authorization': 'whatever-you-want', 'Accept': 'application/json', };

export function fetchPostCommentsCount(id, callback) {
  return dispatch => {
    axios.get(`${BASE_URL}/posts/${id}/comments`)
    .then(response => {
      // fetch all comments that are not deleted
      const comments = _.filter(response.data, comment => !comment.deleted);
      const amount = Object.keys(comments).length;
      const data = { id, amount }
      callback(data);
      dispatch({ type: FETCH_POST_COMMENTS_COUNT, payload: data });
    });
  }
}

export function fetchPostComments(postId) {
  return dispatch => {
    axios.get(`${BASE_URL}/posts/${postId}/comments`)
    .then(response => {
      dispatch({ type: FETCH_POST_COMMENTS, payload: response.data })
    })
  }
}

export function deleteCommentPost(id, callback) {
  return dispatch => {
    axios.delete(`${BASE_URL}/comments/${id}`)
    .then(response => {
      callback();
      dispatch({ type: COMMENT_POST_WAS_DELETED, payload: response.data });
    });
  }
}
