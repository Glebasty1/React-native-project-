import { combineReducers } from 'redux';

import audioPlayer from './audioPlayerReducer';
import auth from './authReducer';
import app from './appReducer';


const reducers = {
  app,
  audioPlayer,
  auth,
};

const reducer = combineReducers(reducers);


export default reducer;
