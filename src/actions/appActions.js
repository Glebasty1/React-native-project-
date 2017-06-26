import { Actions, ActionConst } from 'react-native-router-flux';

import CHANGE_CURRENT_SCREEN from '../constants/appConstants';

/*
 * action creators
 */

 // app actions
const changeCurrentScreen = (newScreen) => {
  Actions[newScreen]({ type: ActionConst.RESET });
  return {
    type: CHANGE_CURRENT_SCREEN,
    newScreen,
  };
};

export default changeCurrentScreen;
