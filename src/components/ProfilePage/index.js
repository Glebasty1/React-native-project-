import { connect } from 'react-redux';

import { editProfileRequest } from '../../actions/authActions';

import EditProfilePage from './EditProfilePage';

// SignUpForm container
const mapStateToProps = state => ({
  editProfileError: state.auth.getIn(['errors', 'editProfileError']),
});

const mapDispatchToProps = dispatch => ({
  editProfileRequest: (ProfilePageInputs) => {
    dispatch(editProfileRequest(ProfilePageInputs));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);
