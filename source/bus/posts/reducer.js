import { fromJS, List } from 'immutable';
import { FILL_POSTS, CREATE_POST_ASYNC } from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_POSTS:
      return fromJS(action.payload);

    case CREATE_POST_ASYNC:
      return state.splice(0, 0, fromJS(action.payload));

    default:
      return state;
  }
};
