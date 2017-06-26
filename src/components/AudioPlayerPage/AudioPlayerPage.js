import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

class AudioPlayerPage extends React.Component {
  componentDidMount() {
    this.props.retrieveSongRequest();
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '500' }}>Audio Player Page</Text>
        <Text style={{ textAlign: 'center' }}>Chose your song and tap play</Text>
        <AudioPlayer
          songs={this.props.songs}
          currentSongSrc={this.props.currentSongSrc}
          currentSongName={this.props.currentSongName}
        />
      </View>
    );
  }
}

AudioPlayerPage.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object),
  currentSongSrc: PropTypes.string,
  changeSongRequest: PropTypes.func,
  currentSongName: PropTypes.string,
  retrieveSongRequest: PropTypes.func,
};

export default AudioPlayerPage;
