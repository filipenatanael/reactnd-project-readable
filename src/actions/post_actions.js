import axios from 'axios';

axios.defaults.headers.common['Authorization'] = { 'Authorization': 'whatever-you-want', 'Accept': 'application/json', };

export function fetchPosts() {
  return dispatch => {
    axios.get(`http://localhost:3001/posts`)
    .then(res => dispatch(fetchPostsSuccess(res.data)));
  }
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
