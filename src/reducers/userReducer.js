import * as types from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return {...state, "user": action.payload, "id": action.payload.id };

        case types.FETCH_RECOMMEND:
            return {...state, "recomments": action.payload };

        default:
            return state;
    }
}
