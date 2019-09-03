import { List, fromJS } from 'immutable';
import { usersActions } from '../actions';
import { usersReducer } from '../reducer';

const initialState = List();

describe('users reducer:', () => {
  test('should return initial state by default', () => {
    expect(usersReducer(void 0, {})).toEqual(initialState);
  });

  test('should handle CLEAR_USERS action', () => {
    expect(usersReducer(void 0, usersActions.clearUsers())).toEqual(initialState.clear());
  });

  test('should handle FILL_USERS action', () => {
    expect(usersReducer(void 0, usersActions.fillUsers(__.users))).toEqual(fromJS(__.users));
  });
});
