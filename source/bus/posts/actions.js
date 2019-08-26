import { types } from './types';

export const postsActions = {
  fillPosts: posts => {
    return {
      type: types.FILL_POSTS,
      payload: posts,
    };
  },
  createPost: post => {
    return {
      type: types.CREATE_POST,
      payload: post,
    };
  },
  fetchPostsAsync: () => {
    return {
      type: types.FETCH_POSTS_ASYNC,
    };
  },
  clearPosts: () => {
    return {
      type: types.CLEAR_POSTS,
    };
  },
  createPostAsync: comment => {
    return {
      type: types.CREATE_POST_ASYNC,
      payload: comment,
    };
  },
  removePost: id => {
    return {
      type: types.REMOVE_POST,
      payload: id,
    };
  },
  removePostAsync: id => {
    return {
      type: types.REMOVE_POST_ASYNC,
      payload: id,
    };
  },
  likePostAsync: id => {
    return {
      type: types.LIKE_POST_ASYNC,
      payload: id,
    };
  },
  likePost: likedPostdata => {
    return {
      type: types.LIKE_POST,
      payload: likedPostdata,
    };
  },
  unlikePostAsync: id => {
    return {
      type: types.UNLIKE_POST_ASYNC,
      payload: id,
    };
  },
  unlikePost: unlikedPostdata => {
    return {
      type: types.UNLIKE_POST,
      payload: unlikedPostdata,
    };
  },
};
