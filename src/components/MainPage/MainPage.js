import React from 'react';
import PropTypes from 'prop-types';
import SideBarMenu from 'react-native-side-menu';
import SideBar from '../SideBar/SideBar';
import { View } from 'react-native';


class MainPage extends React.Component {
  componentDidMount() {
    this.props.checkLoginInfo();
  }
  render() {
    return (
      <SideBarMenu menu={
        <SideBar
          handleSignOut={this.props.handleSignOut}
          changeCurrentScreen={this.props.changeCurrentScreen}
        />
      }
      >
        <View style={{
          backgroundColor: '#fff',
          flex: 1,
          paddingTop: 30,
        }}
        >
          <View>
            {
                React.createElement(
                  this.props.children[0].component,
                )
              }
          </View>
        </View>
      </SideBarMenu>
    );
  }
}

MainPage.propTypes = {
  handleSignOut: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  checkLoginInfo: PropTypes.func.isRequired,
  changeCurrentScreen: PropTypes.func.isRequired,
};

export default MainPage;
