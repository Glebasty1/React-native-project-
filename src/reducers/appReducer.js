import { Map } from 'immutable';

import CHANGE_CURRENT_SCREEN from '../constants/appConstants';

const initialState = Map({
  currentScreen: '',
  previousScreen: '',
});

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_SCREEN:
      return state
        .set('previousScreen', state.get('currentScreen'))
        .set('currentScreen', action.newScreen);
    default:
      return state;
  }
}
