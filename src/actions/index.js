import * as types from './types';
import users from '../api/users';

export const fetchUser = (id) => async dispatch => {
    const response = await users.get(`/users/${id}`);
    dispatch({ type: types.FETCH_USER, payload: response.data });
};