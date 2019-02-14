import axios from 'axios';
import _ from 'lodash';
import { BASE_URL, guid } from '../resources/constants';
import {
  FETCH_COMMENTS_COUNT,
  FETCH_COMMENTS,
  COMMENT_WAS_DELETED,
  VOTE_FOR_COMMENT,
  COMMENT_WAS_CREATED,
} from './types';

axios.defaults.headers.common['Authorization'] = { 'Authorization': 'whatever-you-want', 'Accept': 'application/json', };

export function fetchCommentsCount(id, callback) {
  return dispatch => {
    axios.get(`${BASE_URL}/posts/${id}/comments`)
    .then(response => {
      // fetch all comments that are not deleted
      const comments = _.filter(response.data, comment => !comment.deleted);
      const amount = Object.keys(comments).length;
      const data = { id, amount }
      callback(data);
      dispatch({ type: FETCH_COMMENTS_COUNT, payload: data });
    }).catch(error => console.log(error));
  }
}

export function fetchComments(postId) {
  return dispatch => {
    axios.get(`${BASE_URL}/posts/${postId}/comments`)
    .then(response => {
      dispatch({ type: FETCH_COMMENTS, payload: response.data })
    })
  }
}

export function deleteComment(id, callback) {
  return dispatch => {
    axios.delete(`${BASE_URL}/comments/${id}`)
    .then(response => {
      callback();
      dispatch({ type: COMMENT_WAS_DELETED, payload: response.data });
    }).catch(error => console.log(error));
  }
}

export function voteForComment(id, vote) {
  return dispatch => {
    axios.post(`${BASE_URL}/comments/${id}`, { option: vote })
    .then(response => dispatch({ type: VOTE_FOR_COMMENT, payload: response.data }))
    .catch(error => console.log(error));
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
    .then(response => {
      callback();
      dispatch({ type: COMMENT_WAS_CREATED, payload: response.data });
    });
  }
}
