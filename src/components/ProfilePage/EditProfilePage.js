import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, TextInput } from 'react-native';
import styles from './styles';

export default class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      email: '',
      password: '',
    };
  }
  handleSubmit = () => {
    const login = this.state.login;
    const email = this.state.email;
    const password = this.state.password;

    this.props.editProfileRequest({ login, email, password });

    this.setState({
      login: '',
      email: '',
      password: '',
    });
  };

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headers}>Edit Profile Form</Text>
        {this.props.editProfileError ?
          <Text style={styles.errorMassage}>{this.props.editProfileError}</Text>
          : null
        }
        <Text style={styles.inputName}>New UserName</Text>
        <TextInput
          style={styles.inputViewText}
          value={this.state.login}
          onChangeText={text => this.handleInputChange('login', text)}
          placeholder="Login"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
        />
        <Text style={styles.inputName}>New E-mail</Text>
        <TextInput
          style={styles.inputViewText}
          value={this.state.email}
          onChangeText={text => this.handleInputChange('email', text)}
          placeholder="E-mail"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
        />
        <Text style={styles.inputName}>New Password</Text>
        <TextInput
          style={styles.inputViewText}
          value={this.state.password}
          onChangeText={text => this.handleInputChange('password', text)}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          secureTextEntry
        />
        <View style={styles.buttonView}>
          <Button
            title="Save"
            onPress={this.handleSubmit}
            color="black"
          />
        </View>
      </View>
    );
  }
}

EditProfileForm.propTypes = {
  editProfileRequest: PropTypes.func.isRequired,
  editProfileError: PropTypes.string,
};

