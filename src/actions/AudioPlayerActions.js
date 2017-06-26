import constant from '../constants/audioPlayerConstant';
import Backendless from 'backendless';

/*
 * action creators
 */

// AudioPlayer actions
const retrieveSongListSuccess = songsList => ({
  type: constant.RETRIEVE_SONG_LIST_SUCCESS,
  payload: songsList,
});

const retrieveSongRequest = () => (dispatch) => {
  Backendless.Files.listing(
      '/songs',
      '*.mp3',
      false,
      null,
      null,
      new Backendless.Async(
        // Changing data for Audio component
        (songsObject) => {
          dispatch(retrieveSongListSuccess(songsObject.data));
        },
      ),
  );
};

const changeSongRequest = newSongInfo => ({
  type: constant.CHANGE_SONG_REQUEST,
  payload: newSongInfo,
});

export {
  retrieveSongRequest,
  changeSongRequest,
};
