
import * as types from './types';
import users from '../api/users';
import user from '../api/user';

export const fetchUser = (id) => async dispatch => {
    const response = await users.get(`/users/${id}`);
    dispatch({ type: types.FETCH_USER, payload: response.data });
};

export const fetchRecommendations = (id) => async dispatch => {
    const response = await user.get(`/user/${id}/recommendations`);
    dispatch({ type: types.FETCH_RECOMMENDATIONS, payload: response.data.data })
}

export const spreadId = (id) => (
    {
        type: types.SPREAD_ID,
        payload: id
    }
)