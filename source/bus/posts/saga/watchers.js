import { takeEvery, all, call } from 'redux-saga/effects';
import { types } from '../types';
import { createPost, fillPosts, removePost } from './workers';

function* watchCreatePost() {
  yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

function* watchFillPosts() {
  yield takeEvery(types.FETCH_POSTS_ASYNC, fillPosts);
}

function* watchRemovePost() {
  yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}

export function* watchPosts() {
  yield all([call(watchCreatePost), call(watchFillPosts), call(watchRemovePost)]);
}
