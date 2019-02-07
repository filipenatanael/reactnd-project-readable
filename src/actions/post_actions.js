import axios from 'axios';
import { BASE_URL, guid } from '../resources/constants'

axios.defaults.headers.common['Authorization'] = { 'Authorization': 'whatever-you-want', 'Accept': 'application/json', };

export function fetchPosts() {
  return dispatch => {
    axios.get(`http://localhost:5001/posts`)
    .then(res => dispatch(fetchPostsSuccess(res.data)));
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

function createPostSuccess(data) {
  return {
    type: 'POST_WAS_CREATED',
    payload: data
  };
}

function fetchPostsSuccess(data) {
  return {
    type: 'FETCH_POSTS',
    payload: data
  };
}

export function postSortOrder(sortType) {
  return {
    type: 'POST_SORT_ORDER',
    payload: sortType
  }
}
