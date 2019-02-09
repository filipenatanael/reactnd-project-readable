import axios from 'axios';

axios.defaults.headers.common['Authorization'] = { 'Authorization': 'whatever-you-want', 'Accept': 'application/json', };

export function fetchCategories() {
  return dispatch => {
    axios.get(`http://localhost:5001/categories`)
    .then(res => dispatch(fetchCategoriesSuccess(res.data)));
  }
}

const fetchCategoriesSuccess = (categories) => {
  return {
    type: 'FETCH_CATEGORIES',
    payload: categories
  }
}

export function fetchCategoryPosts(category) {
  return dispatch => {
    axios.get(`http://localhost:5001/${category}/posts`)
    .then(res => dispatch({ type: 'FETCH_CATEGORY_POSTS', payload: res.data }))
    .catch(error => console.error(error))
  }
}
