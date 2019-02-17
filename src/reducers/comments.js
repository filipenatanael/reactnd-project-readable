import _ from 'lodash';
import  {
  FETCH_COMMENTS_COUNT,
  FETCH_COMMENTS,
  COMMENT_WAS_DELETED,
  VOTE_FOR_COMMENT,
  COMMENT_WAS_CREATED,
} from '../actions/types';

const INITIAL_STATE = {
  commentCount: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_COMMENTS_COUNT:
      const { id, amount } = action.payload;
      return {
        ...state,
        commentCount: {
          ...state['commentCount'],
          [id]: amount
        }
      };
    case FETCH_COMMENTS:
      return _.mapKeys(action.payload, 'id');
    case COMMENT_WAS_DELETED:
      return _.omit(state, action.payload);
    case VOTE_FOR_COMMENT:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case COMMENT_WAS_CREATED:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    default:
    return state;
  }
}
