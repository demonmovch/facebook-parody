import { all, call } from 'redux-saga/effects';
import { watchPosts } from '../bus/posts/saga/watchers';

export function* rootSaga() {
  yield all([call(watchPosts)]);
}
