import { connect } from 'react-redux';
import { logInRequest } from '../../actions/authActions';
import LoginForm from './LoginForm';

 // LoginForm container
const mapStateToProps = state => ({
  logInError: state.auth.getIn(['errors', 'logInError']),
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (loginData) => {
    dispatch(logInRequest(loginData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
