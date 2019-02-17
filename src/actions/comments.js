import axios from 'axios';
import _ from 'lodash';
import { BASE_URL, guid } from '../resources/constants';
import {
  FETCH_COMMENTS_COUNT,
  FETCH_COMMENTS,
  COMMENT_WAS_CREATED,
  COMMENT_WAS_EDITED,
  COMMENT_WAS_DELETED,
  VOTE_FOR_COMMENT,
} from './types';

axios.defaults.headers.common['Authorization'] = { 'Authorization': 'whatever-you-want', 'Accept': 'application/json', };

export function fetchCommentsCount(id, callback) {
  return dispatch => {
    axios.get(`${BASE_URL}/posts/${id}/comments`)
    .then(res => {
      // fetch all comments that are not deleted
      const comments = _.filter(res.data, comment => !comment.deleted);
      const amount = Object.keys(comments).length;
      const data = { id, amount }
      callback(data);
      dispatch({
        type: FETCH_COMMENTS_COUNT,
        payload: data
      });
    }).catch(error => console.log(error));
  }
}

export function fetchComments(postId) {
  return dispatch => {
    axios.get(`${BASE_URL}/posts/${postId}/comments`)
    .then(res => {
      dispatch({
        type: FETCH_COMMENTS,
        payload: res.data
      });
    })
  }
}

export function createComment(body, author, parentId, callback) {
  const data = {
    id: guid(),
    parentId,
    timestamp: Date.now(),
    body,
    author
  }

  return dispatch => {
    axios.post(`${BASE_URL}/comments`, data)
    .then(res => {
      callback();
      dispatch({
        type: COMMENT_WAS_CREATED,
        payload: res.data
      });
    });
  }
}

export function editComment(id, values, callback) {
  return dispatch => {
    axios.put(`${BASE_URL}/comments/${id}`, values)
    .then(res => {
      callback();
      dispatch({
        type: COMMENT_WAS_EDITED,
        payload: res.data
      });
    });
  }
}

export function deleteComment(id, callback) {
  return dispatch => {
    axios.delete(`${BASE_URL}/comments/${id}`)
    .then(res => {
      callback();
      dispatch({
        type: COMMENT_WAS_DELETED,
        payload: res.data
      });
    }).catch(error => console.log(error));
  }
}

export function voteForComment(id, vote) {
  return dispatch => {
    axios.post(`${BASE_URL}/comments/${id}`, { option: vote })
    .then(res => dispatch({ type: VOTE_FOR_COMMENT, payload: res.data }))
    .catch(error => console.log(error));
  }
}
