import axios from 'axios';

axios.defaults.headers.common['Authorization'] = { 'Authorization': 'whatever-you-want', 'Accept': 'application/json', };

export function fetchCategories() {
  return dispatch => {
    axios.get(`http://localhost:5001/categories`)
    .then(res => dispatch(fetchCategoriesSuccess(res.data)));
  }
}

const fetchCategoriesSuccess = (categories) => {
  console.log('From Arctions: ', categories);
  return {
    type: 'FETCH_CATEGORIES',
    payload: categories
  }
}
