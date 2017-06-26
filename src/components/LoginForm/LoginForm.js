import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = () => {
    const email = this.state.email;
    const password = this.state.password;

    this.props.handleLogin({ email, password });

    this.setState({
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
        <View>
          <Text style={styles.headers}>Login Form</Text>
          {this.props.logInError ?
            <Text style={styles.errorMassage}>{this.props.logInError}</Text> : null
          }
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
        </View>
        <View>
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
        </View>
        <View style={styles.buttonView}>
          <Button
            title="Log In"
            onPress={this.handleSubmit}
            color="white"
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            title="Sign Up"
            onPress={() => Actions.signUpScreen()}
            color="white"
          />
        </View>
      </View>
    );
  }
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  logInError: PropTypes.string,
};

