import actionTypes from "../actionTypes";

export const signInAuthRequest = (email: string, password: string) => {
  return {
    type: actionTypes.LOGIN_AUTH_REQUEST,
    payload: {
      email: email,
      password: password,
    },
  };
};

export const signInAuthSuccess = () => {
  return {
    type: actionTypes.LOGIN_AUTH_SUCCESS,
  };
};

export const signInAuthFailure = () => {
  return {
    type: actionTypes.LOGIN_AUTH_FAILURE,
  };
};

export const userLoginStatusSuccess = () => {
  return {
    type: actionTypes.USER_LOGIN_STATUS_SUCCESS,
  };
};

export const userLoginStatusFailure = () => {
  return {
    type: actionTypes.USER_LOGIN_STATUS_FAILURE,
  };
};
