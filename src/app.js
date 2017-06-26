import { Provider } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';

import React from 'react';
import Backendless from 'backendless';
import backendlessConst from './constants/config/backendless';

import store from './store';

import SignUpForm from './components/SignUpForm/index';
import MainPage from './components/MainPage/index';
import LoginForm from './components/LoginForm/index';
import EditProfileForm from './components/ProfilePage/index';
import AudioPlayerPage from './components/AudioPlayerPage/index';


const RouterWithRedux = (Router);
const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="loginScreen"
      component={LoginForm}
      title="Login"
    />
    <Scene
      key="signUpScreen"
      component={SignUpForm}
      title="Sign Up"
    />
    <Scene
      key="mainScreen"
      component={MainPage}
      title="Main Page"
      initial
    >
      <Scene
        key="audioPlayerScreen"
        component={AudioPlayerPage}
        title="Audio Player"
        initial
      />

      <Scene
        key="editProfileScreen"
        component={EditProfileForm}
        title="Edit Profile"
      />
    </Scene>
  </Scene>,
);

export default class SuperAudioPlayer extends React.Component {
  componentWillMount() {
    Backendless.serverURL = 'https://api.backendless.com';
    Backendless.initApp(
      backendlessConst.APP_ID,
      backendlessConst.SECRET_KEY,
      backendlessConst.VERSION,
    );
  }

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={scenes} />
      </Provider>
    );
  }
}
