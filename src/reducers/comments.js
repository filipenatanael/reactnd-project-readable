import  {
  FETCH_POST_COMMENTS_COUNT,
} from '../actions/types';

const INITIAL_STATE = {
  commentCount: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POST_COMMENTS_COUNT:
      const { id, amount } = action.payload;
      return {
        ...state,
        commentCount: {
          ...state['commentCount'],
          [id]: amount
        }
      };
    default:
    return state;
  }
}
