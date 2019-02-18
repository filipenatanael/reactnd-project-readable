import {
  FETCH_CATEGORIES,
} from '../actions/types'

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload.categories;
    default:
      return state;
  }
}
