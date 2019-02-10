import axios from 'axios';
import _ from 'lodash';
import { BASE_URL } from '../resources/constants';
import {
  FETCH_POST_COMMENTS_COUNT,
} from './types';

axios.defaults.headers.common['Authorization'] = { 'Authorization': 'whatever-you-want', 'Accept': 'application/json', };

export function fetchPostCommentsCount(id, callback) {
  return dispatch => {
    axios.get(`${BASE_URL}/posts/${id}/comments`)
    .then(res => {
      // fetch all comments that are not deleted
      const comments = _.filter(res.data, comment => !comment.deleted);
      const amount = Object.keys(comments).length;
      const data = { id, amount }
      callback(data);
      dispatch({ type: FETCH_POST_COMMENTS_COUNT, payload: data });
    });
  }
}
