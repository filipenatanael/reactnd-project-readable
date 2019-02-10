import axios from 'axios';
import { BASE_URL, guid } from '../resources/constants'
import {
  FETCH_POSTS,
  FETCH_POST,
  POST_WAS_CREATED,
  POST_SORT_ORDER,
  POST_WAS_DELETED,
  POST_WAS_EDITED,
} from './types'


axios.defaults.headers.common['Authorization'] = { 'Authorization': 'whatever-you-want', 'Accept': 'application/json', };

export function fetchPosts() {
  return dispatch => {
    axios.get(`${BASE_URL}/posts`)
    .then(res => dispatch(fetchPostsSuccess(res.data)));
  }
}

export function fetchPost(id, callback) {
  return dispatch => {
    axios.get(`${BASE_URL}/posts/${id}`)
    .then(res => {
      dispatch(fetchPostSuccess(res.data))
      setTimeout(function(){ callback() }, 100);
    })
  }
}

export function createPost(values, callback) {
  const { title, body, author, category } = values;

  const data = {
    id: guid(),
    timestamp: Date.now(),
    title,
    body,
    author,
    category
  }

  return dispatch => {
    axios.post(`${BASE_URL}/posts`, data)
    .then(res => {
      callback();
      dispatch(createPostSuccess(res.data));
    });

  }
}

export function editPost(id, values, callback) {
  return dispatch => {
    axios.put(`${BASE_URL}/posts/${id}`, values)
    .then(res => {
      callback();
      dispatch(editPostSuccess(res.data))
    });
  }
}

function editPostSuccess(data) {
  return {
    type: POST_WAS_EDITED,
    payload: data
  }
}

export function deletePost(id, callback) {
  return dispatch => {
    axios.delete(`${BASE_URL}/posts/${id}`)
    .then(res => {
      callback()
      dispatch(deletePostSuccess(id));
    });
  }
}

function fetchPostsSuccess(data) {
  return {
    type: FETCH_POSTS,
    payload: data
  };
}


function fetchPostSuccess(data) {
  return {
    type: FETCH_POST,
    payload: data
  };
}

function createPostSuccess(data) {
  return {
    type: POST_WAS_CREATED,
    payload: data
  };
}

export function postSortOrder(sortType) {
  return {
    type: POST_SORT_ORDER,
    payload: sortType
  }
}

function deletePostSuccess(data) {
  return {
    type: POST_WAS_DELETED,
    payload: data
  }
}
