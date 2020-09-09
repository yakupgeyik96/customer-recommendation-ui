import * as types from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return {...state, "user": action.payload };

        case types.FETCH_RECOMMENDATIONS:
            return {...state, "recommendations": action.payload };

        case types.SPREAD_ID:
            return {...state, "id": action.payload};

        default:
            return state;
    }
}
