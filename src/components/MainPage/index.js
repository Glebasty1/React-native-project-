import { connect } from 'react-redux';

import { signOutRequest, checkLoginInfo } from '../../actions/authActions';
import changeCurrentScreen from '../../actions/appActions';
import MainPage from './MainPage';


const mapDispatchToProps = dispatch => ({
  handleSignOut: () => {
    dispatch(signOutRequest());
  },
  checkLoginInfo: () => {
    dispatch(checkLoginInfo());
  },
  changeCurrentScreen: (newPage) => {
    dispatch(changeCurrentScreen(newPage));
  },
});

export default connect(null, mapDispatchToProps)(MainPage);

