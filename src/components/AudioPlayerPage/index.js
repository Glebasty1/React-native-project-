import { connect } from 'react-redux';

import { retrieveSongRequest, changeSongRequest } from '../../actions/AudioPlayerActions';

import AudioPlayerPage from './AudioPlayerPage';

const mapStateToProps = state => ({
  songs: state.audioPlayer.get('songs'),
  currentSongSrc: state.audioPlayer.get('currentSongSrc'),
  currentSongName: state.audioPlayer.get('currentSongName'),
});

const mapDispatchToProps = dispatch => ({
  retrieveSongRequest: () => {
    dispatch(retrieveSongRequest());
  },
  changeSongRequest: (newUrl) => {
    dispatch(changeSongRequest(newUrl));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayerPage);

