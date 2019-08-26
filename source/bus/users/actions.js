import { types } from './types';

export const usersActions = {
  fillUsers: users => {
    return {
      type: types.FILL_USERS,
      payload: users,
    };
  },
  fectchUsersAsync: () => {
    return {
      type: types.FETCH_USERS_ASYNC,
    };
  },
  clearUsers: () => {
    return {
      type: types.CLEAR_USERS,
    };
  },
};
