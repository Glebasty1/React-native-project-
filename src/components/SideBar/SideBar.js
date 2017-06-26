import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


export default class Sidebar extends React.Component {
  render() {
    return (
      <View style={{
        backgroundColor: 'grey',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50,
      }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
          }}
        >
          Menu
        </Text>
        <TouchableOpacity onPress={() => this.props.changeCurrentScreen('editProfileScreen')}>
          <Text style={{ paddingTop: 20, fontSize: 17 }}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.changeCurrentScreen('audioPlayerScreen')}>
          <Text style={{ paddingTop: 20, fontSize: 17 }}>Audio Player</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.handleSignOut}>
          <Text style={{ paddingTop: 20, fontSize: 17 }}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Sidebar.PropTypes = {
  handleSignOut: PropTypes.func.isRequired,
  changeCurrentScreen: PropTypes.func.isRequired,
};

