import { usersActions } from '../actions';
import { types } from '../types';

describe('users actions:', () => {
  test('fectchUsersAsync', () => {
    expect(usersActions.fectchUsersAsync()).toEqual({
      type: types.FETCH_USERS_ASYNC,
    });
  });

  test('clearUsers', () => {
    expect(usersActions.clearUsers()).toEqual({
      type: types.CLEAR_USERS,
    });
  });

  test('fillUsers', () => {
    expect(usersActions.fillUsers(__.users)).toEqual({
      type: types.FILL_USERS,
      payload: __.users,
    });
  });
});
