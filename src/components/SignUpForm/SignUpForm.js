import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, TextInput } from 'react-native';
import styles from './styles';

export default class SignUpForm extends React.Component {
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

    this.props.handleSignUp({ login, email, password });

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
        <Text style={styles.headers}>Sign Up Form</Text>
        {this.props.signUpError ?
          <Text style={styles.errorMassage}>{this.props.signUpError}</Text> : null
        }
        <Text style={styles.inputName}>Login</Text>
        <TextInput
          style={styles.inputViewText}
          value={this.state.login}
          onChangeText={text => this.handleInputChange('login', text)}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          placeholder="Login"
        />
        <Text style={styles.inputName}>E-mail</Text>
        <TextInput
          style={styles.inputViewText}
          value={this.state.email}
          onChangeText={text => this.handleInputChange('email', text)}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          placeholder="E-mail"
        />
        <Text style={styles.inputName}>Password</Text>
        <TextInput
          style={styles.inputViewText}
          value={this.state.password}
          onChangeText={text => this.handleInputChange('password', text)}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.buttonView}>
          <Button
            title="Sign Up"
            onPress={this.handleSubmit}
            color="white"
          />
        </View>
      </View>
    );
  }
}

SignUpForm.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  signUpError: PropTypes.string,
};
