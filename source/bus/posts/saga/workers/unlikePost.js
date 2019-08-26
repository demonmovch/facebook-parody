import { put, apply, select } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* unlikePost({ payload: id }) {
  try {
    yield put(uiActions.startFetching());

    const response = yield apply(api, api.posts.like, [id]);

    if (response.status !== 204) {
      const { message } = yield apply(response, response.json);
      throw new Error(message);
    }

    const liker = yield select(state => {
      return state.profile.remove('avatar').remove('token');
    });

    yield put(postsActions.unlikePost({ liker, id }));
  } catch (error) {
    yield put(uiActions.emitError(error, 'unlikePost worker'));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
