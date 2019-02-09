import _ from 'lodash';
import {
  FETCH_POSTS,
  FETCH_CATEGORY_POSTS,
  POST_WAS_DELETED
} from '../actions/types'

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload, 'id')
    case FETCH_CATEGORY_POSTS:
      return _.mapKeys(action.payload, 'id')
    case POST_WAS_DELETED:
      return _.omit(state, action.payload)
    default:
      return state;
  }
}
