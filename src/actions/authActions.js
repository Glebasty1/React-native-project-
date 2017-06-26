import { AsyncStorage } from 'react-native';
import constant from '../constants/authConstants';
import changeCurrentScreen from './appActions';

import Backendless from 'backendless';

/*
 * action creators
 */

// SignOut actions
const signOutSuccess = () => ({
  type: constant.SIGN_OUT_SUCCESS,
});

const signOutError = () => ({
  type: constant.SIGN_OUT_ERROR,
});

const signOutRequest = () => (dispatch) => {
  Backendless.UserService.logout(new Backendless.Async(
    (success) => {
      AsyncStorage.removeItem('currentUser');
      dispatch(changeCurrentScreen('loginScreen'));
      dispatch(signOutSuccess());
    },
    error => dispatch(signOutError()),
  ));
};


// Edit profile actions
const editProfileSuccess = editProfileInputs => ({
  type: constant.EDIT_PROFILE_SUCCESS,
  editProfileInputs,
});

const editProfileError = error => ({
  type: constant.EDIT_PROFILE_ERROR,
  error,
});

const editProfileRequest = editProfileData => (dispatch) => {
  if (!editProfileData.login) {
    dispatch(editProfileError('Please, enter your login'));
    return undefined;
  }
  if (!editProfileData.email) {
    dispatch(editProfileError('Please, enter your email'));
    return undefined;
  }
  if (!editProfileData.password) {
    dispatch(editProfileError('Please, enter your password'));
    return undefined;
  }

  const login = editProfileData.login;
  const email = editProfileData.email;
  const password = editProfileData.password;
  const user = Backendless.UserService.getCurrentUser();
  user.login = login;
  user.email = email;
  user.password = password;

  Backendless.UserService.update(user, new Backendless.Async(
    (success) => {
      Backendless.UserService.logout(new Backendless.Async(
        (success) => {
          dispatch(changeCurrentScreen('loginScreen'));
          dispatch(signOutSuccess());
        },
        error => dispatch(signOutError()),
      ));
      dispatch(editProfileSuccess({ login, email, password }));
    },
    error => dispatch(editProfileError(error.message)),
  ));
};


// Log in actions
const logInSuccess = loginInputs => ({
  type: constant.LOG_IN_SUCCESS,
  loginInputs,
});

const logInError = error => ({
  type: constant.LOG_IN_ERROR,
  error,
});

const logInRequest = loginData => (dispatch) => {
  if (!loginData.email) {
    dispatch(logInError('Please, enter your email'));
    return undefined;
  }
  if (!loginData.password) {
    dispatch(logInError('Please, enter your password'));
    return undefined;
  }
  const email = loginData.email;
  const password = loginData.password;
  Backendless.UserService.login(email, password, true, new Backendless.Async(
    (user) => {
      dispatch(logInSuccess({ email, password }));
      AsyncStorage.setItem('loginData', JSON.stringify(loginData));
      AsyncStorage.setItem('currentUser', JSON.stringify(user));
      dispatch(changeCurrentScreen('mainScreen'));
    },
    error => dispatch(logInError(error.message)),
  ));
};

const checkLoginInfo = () => (dispatch) => {
  // getCurrentUser
  AsyncStorage.getItem('currentUser')
    .then((data) => {
      if (data) {
        dispatch(changeCurrentScreen('mainScreen'));
      } else {
        dispatch(changeCurrentScreen('loginScreen'));
      }
    });
};


// Sign up actions
const signUpSuccess = signUpData => ({
  type: constant.SIGN_UP_SUCCESS,
  signUpData,
});

const signUpError = error => ({
  type: constant.SIGN_UP_ERROR,
  error,
});

const signUpRequest = signUpData => (dispatch) => {
  if (!(/^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+.)+[a-z]{2,6}$/.test(signUpData.email))) {
    dispatch(signUpError('Invalid email'));
    return undefined;
  }
  if (!signUpData.login) {
    dispatch(signUpError('Please, enter your login'));
    return undefined;
  }
  if (!signUpData.email) {
    dispatch(signUpError('Please, enter your email'));
    return undefined;
  }
  if (!signUpData.password) {
    dispatch(signUpError('Please, enter your password'));
    return undefined;
  }
  const login = signUpData.login;
  const email = signUpData.email;
  const password = signUpData.password;

  const user = new Backendless.User();
  user.login = login;
  user.email = email;
  user.password = password;

  Backendless.UserService.register(user, new Backendless.Async(
    (success) => {
      dispatch(changeCurrentScreen('loginScreen'));
      dispatch(signUpSuccess({ login, email, password }));
    },
    error => dispatch(signUpError(error.message)),
  ));
};

export {
  signUpRequest,
  logInRequest,
  checkLoginInfo,
  editProfileRequest,
  signOutRequest,
};
