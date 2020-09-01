import * as types from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return {...state, [action.payload.id]: action.payload };

        default:
            return state;
    }
}