const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    console.log('From reduer: ',action.payload);
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return action.payload.categories;
        default:
            return state;
    }
}
