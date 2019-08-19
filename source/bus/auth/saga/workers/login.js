import { put, apply } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { authActions } from '../../actions';
import { profileActions } from '../../../profile/actions';

export function* login({ payload: credentials }) {
  try {
    yield put(uiActions.startFetching());

    const response = yield apply(api, api.auth.login, [credentials]);
    const { message } = yield apply(response, response.json);

    if (response.status !== 200) {
      throw new Error(message);
    }

    yield put(authActions.authenticate());
  } catch (error) {
    yield put(uiActions.emitError(error, 'login worker'));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
