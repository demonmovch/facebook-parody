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
  authenticateAsync: () => {
    return {
      type: types.AUTHENTICATE_ASYNC,
    };
  },
  initializeAsync: () => {
    return {
      type: types.INITIALIZE_ASYNC,
    };
  },
  initialize: () => {
    return {
      type: types.INITIALIZE,
    };
  },
  logoutAsync: () => {
    return {
      type: types.LOGOUT_ASYNC,
    };
  },
  logout: () => {
    return {
      type: types.LOGOUT,
    };
  },
};
