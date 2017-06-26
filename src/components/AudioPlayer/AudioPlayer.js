import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableHighlight, TouchableOpacity, Text, View, Slider, DeviceEventEmitter } from 'react-native';
import RNAudioStreamer from 'react-native-audio-streamer';

import styles from './styles';

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songDuration: 0,
      songCurrentTime: 0,
      songsPlay: false,
      currentVolume: 1,
      currentSong: props.currentSongSrc,
      currentSongName: props.currentSongName,
      intervalId: null,
    };
  }
  componentDidMount() {
    DeviceEventEmitter.addListener('RNAudioStreamerStatusChanged', this._statusChanged.bind(this));
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    RNAudioStreamer.pause();
    this.setState({
      songsPlay: false,
      songDuration: 0,
      songCurrentTime: 0,
    });
  }

  getSongDuration = () => {
    RNAudioStreamer.duration((err, duration) => {
      if (!err) this.setState({ songDuration: duration });
    });
  };

  _statusChanged = (status) => {
    if (status === 'BUFFERING') {
      this.getSongDuration();
    }
  }

  audioPlay = () => {
    RNAudioStreamer.play();
    this.setState({ songsPlay: true });
    const intervalID = setInterval(() => {
      RNAudioStreamer.currentTime((err, currentTime) => {
        if (!err) { this.setState({ songCurrentTime: currentTime }); }
      });
    }, 1000);

    this.setState({ intervalId: intervalID });
  };

  audioPause = () => {
    RNAudioStreamer.pause();
    this.setState({ songsPlay: false });
  };

  changeAudio = (currentSong) => {
    this.setState({
      songCurrentTime: 0,
      songsPlay: false,
      currentSong: currentSong.url,
      currentSongName: currentSong.name,
    });

    RNAudioStreamer.setUrl(currentSong.url);
  };

  changeAudioTime = (value) => {
    this.setState({ songCurrentTime: value });
    RNAudioStreamer.seekToTime(value);
  };
  render() {
    return (
      <View>
        <Text style={styles.currentSongName}>{this.state.currentSongName}</Text>
        {this.state.songsPlay ?
          <TouchableHighlight onPress={this.audioPause}>
            <Image
              style={styles.imageView}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxdj--EjI2IMafwcBQAz19kjF5knq4s6IDgyKKxLRbWBw2oIJA7eMFVE' }}
            />
          </TouchableHighlight>
          :
          <TouchableHighlight onPress={this.audioPlay}>
            <Image
              style={styles.imageView}
              source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-play-128.png' }}
            />
          </TouchableHighlight>
        }
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={this.state.songDuration}
          value={this.state.songCurrentTime}
          step={0.1}
          onValueChange={value => this.changeAudioTime(value)}
        />
        <View>
          {
            this.props.songs && this.props.songs.length > 0
              ? this.props.songs.map(song => (
                <TouchableOpacity
                  style={styles.songView}
                  onPress={() => { this.changeAudio({ url: song.publicUrl, name: song.name }); }}
                  key={song.createdOn}
                >
                  <Text>{song.name}</Text>
                </TouchableOpacity>
              ),
            )
              : <Text>Loading...</Text>
          }
        </View>
      </View>
    );
  }
}

AudioPlayer.PropTypes = {
  songs: PropTypes.arrayOf(PropTypes.object),
  currentSongSrc: PropTypes.string.isRequired,
  currentSongName: PropTypes.string.isRequired,
};
