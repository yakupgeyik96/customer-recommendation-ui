import * as types from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_RECOMMENDATIONS:
            return {...state, "recommendations": action.payload };

        case types.FETCH_USER_INFOS:
            return {...state, "userInfos": action.payload};

        case types.FETCH_TRANSACTIONSCOUNT:
            return {...state, "transactionscount": action.payload};

        case types.FETCH_LASTFLIGHT:
            return {...state, "lastflight": action.payload};

        case types.FETCH_DIFFERENT_DESTINATIONS_COUNT:
            return {...state, "differentdestinationcount": action.payload};

        case types.FETCH_SEASONS:
            return {...state, "seasons": action.payload};

        case types.SPREAD_ID:
            return {...state, "id": action.payload};

        default:
            return state;
    }
}
