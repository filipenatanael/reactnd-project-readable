import {
  POST_SORT_ORDER,
} from '../actions/types'

const INITIAL_STATE = 'voteScore';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_SORT_ORDER:
      return action.payload
    default:
      return state;
  }
}
