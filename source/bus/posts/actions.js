import { FETCH_POSTS_ASYNC, FILL_POSTS, CREATE_POST_ASYNC } from './types';
import { api } from '../../REST';

export const fillPosts = posts => {
  return {
    type: FILL_POSTS,
    payload: posts,
  };
};

export const fetchPostsAsync = () => async dispatch => {
  dispatch({
    type: FETCH_POSTS_ASYNC,
  });

  const response = await api.posts.fetch();
  const result = await response.json();

  dispatch(fillPosts(result.data));
};

export const createPostAsync = comment => async (dispatch, state) => {
  const response = await api.posts.create(comment);
  const { data } = await response.json();

  dispatch({
    type: CREATE_POST_ASYNC,
    payload: data,
  });
};
