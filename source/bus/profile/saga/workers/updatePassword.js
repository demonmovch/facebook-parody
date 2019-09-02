import { put, apply } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';

export function* updatePassword({ payload: { oldPassword, newPassword } }) {
  try {
    yield put(uiActions.startFetching());

    const response = yield apply(api, api.profile.updateProfile, [{ oldPassword, newPassword }]);

    if (response.status !== 200) {
      throw new Error(message);
    }
  } catch (error) {
    yield put(uiActions.emitError(error, 'updatePassword worker'));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
