
import * as types from './types';
import user from '../api/user';

export const fetchRecommendations = (id) => async dispatch => {
    const response = await user.get(`/user/${id}/recommendations`);
    dispatch({ type: types.FETCH_RECOMMENDATIONS, payload: response.data.data })
}

export const fetchSeason = (id) => async dispatch => {
    const response = await user.get(`/user/${id}/season`);
    dispatch({ type: types.FETCH_SEASONS, payload: response.data.data });
}

export const fetchDifferentDestinationsCount = (id) => async dispatch => {
    const response = await user.get(`/user/${id}/differentdestinationscount`);
    dispatch({ type: types.FETCH_DIFFERENT_DESTINATIONS_COUNT, payload: response.data.data });
}

export const fetchLastFlight = (id) => async dispatch => {
    const response = await user.get(`/user/${id}/lastflight`);
    dispatch({ type: types.FETCH_LASTFLIGHT, payload: response.data.data })
}

export const fetchTransactionsCount = (id) => async dispatch => {
    const response = await user.get(`/user/${id}/transactionscount`);
    dispatch({ type: types.FETCH_TRANSACTIONSCOUNT, payload: response.data.data });
}

export const fetchUserInfo = (id) => async dispatch => {
    const response = await user.get(`/user/${id}`);
    dispatch({ type: types.FETCH_USER_INFOS, payload: response.data.data });
}

export const spreadId = (id) => (
    {
        type: types.SPREAD_ID,
        payload: id
    }
)