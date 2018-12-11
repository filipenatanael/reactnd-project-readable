import _ from 'lodash';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FETCH_CATEGORY_POSTS':
            return _.mapKeys(action.payload, 'id');
        default:
            return state;
    }
}
