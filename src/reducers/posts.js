import _ from 'lodash';
import {
  FETCH_POSTS,
  FETCH_POST_ID,
  FETCH_CATEGORY_POSTS,
  POST_WAS_DELETED,
  POST_WAS_EDITED,
  POST_WAS_VOTED,
} from '../actions/types'

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload, 'id')
    case FETCH_POST_ID:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case FETCH_CATEGORY_POSTS:
      return _.mapKeys(action.payload, 'id')
    case POST_WAS_DELETED:
      return _.omit(state, action.payload)
    case POST_WAS_EDITED:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case POST_WAS_VOTED:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    default:
      return state;
  }
}
