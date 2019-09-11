import { apply } from 'redux-saga/effects';
import { actions } from 'react-redux-form';
import { replace } from 'react-router-redux';
import { expectSaga } from 'redux-saga-test-plan';
import { book } from '../../../navigation/book';
import { api } from '../../../REST';
import { uiActions } from '../../ui/actions';
import { authActions } from '../actions';
import { profileActions } from '../../profile/actions';
import { postsActions } from '../../posts/actions';
import { usersActions } from '../../users/actions';
import { logout } from '../saga/workers';

describe('logout saga', () => {
  test('should complete a 204 status response scenario', async () => {
    await expectSaga(logout)
      .put(uiActions.startFetching())
      .provide([[apply(api, api.auth.logout), __.fetchResponseSuccess204]])
      .apply(localStorage, localStorage.removeItem, ['token'])
      .apply(localStorage, localStorage.removeItem, ['remember'])
      .put(profileActions.clearProfile())
      .put(postsActions.clearPosts())
      .put(usersActions.clearUsers())
      .put(uiActions.stopFetching())
      .put(actions.reset('forms.user'))
      .put(authActions.logout())
      .put(replace(book.login))
      .run();
  });

  test('should complete a 401 status response scenario', async () => {
    await expectSaga(logout)
      .put(uiActions.startFetching())
      .provide([[apply(api, api.auth.logout), __.fetchResponseFail401]])
      .put(uiActions.emitError(__.error, 'logout worker'))
      .apply(localStorage, localStorage.removeItem, ['token'])
      .apply(localStorage, localStorage.removeItem, ['remember'])
      .put(profileActions.clearProfile())
      .put(postsActions.clearPosts())
      .put(usersActions.clearUsers())
      .put(uiActions.stopFetching())
      .put(actions.reset('forms.user'))
      .put(authActions.logout())
      .put(replace(book.login))
      .run();
  });
});
