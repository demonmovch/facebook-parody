import { types } from './types';

export const authActions = {
  authenticate: () => {
    return {
      type: types.AUTHENTICATE,
    };
  },
  signupAsync: userData => {
    return {
      type: types.SIGNUP_ASYNC,
      payload: userData,
    };
  },
  loginAsync: credentials => {
    return {
      type: types.LOGIN_ASYNC,
      payload: credentials,
    };
  },
};
