import { connect } from 'react-redux';

import { signUpRequest } from '../../actions/authActions';

import SignUpForm from './SignUpForm';

// SignUpForm container
const mapStateToProps = state => ({
  signUpError: state.auth.getIn(['errors', 'signUpError']),
});

const mapDispatchToProps = dispatch => ({
  handleSignUp: (signUpData) => {
    dispatch(signUpRequest(signUpData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

