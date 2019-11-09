import { LOAD_SOUND, LOAD_SOUND_ERR, PLAY_SOUND, STOP_SOUND, SET_VOLUME } from '../actions'
import { NUMBER_OF_CHANNELS } from '../constants';
import { Audio } from 'expo-av'
/**
 * TODO:
 * Add LOAD_SOUND
 * Add UNLOAD_SOUND
 * Add CHANGE_VOLUME
 * Add STOP_ALL_CHANNELS
 */

// Initialize the state, fill it with the preferred number of channels with default settings
const initialState = {};
//After initialization, state should look like this
/**
 * state = {
 *    0: {
        soundObject: Audio.Sound(),
        file: false,
        playing: false,
        volume: 100,
      },
 *    1: {
        soundObject: Audio.Sound(),
        file: false,
        playing: false,
        volume: 100,
      },
      etc...
 * }
 */

for (let i = 0; i < NUMBER_OF_CHANNELS; i++) {
  initialState[i] = {
    soundObject: new Audio.Sound(),
    file: false,
    playing: false,
    volume: 1,
  };
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_SOUND: return {
      ...state,
      [action.channelId]: {
        ...state[action.channelId],
        file: action.payload.newSound,
      },
    };

    case PLAY_SOUND: return {
      ...state,
      [action.channelId]: {
        ...state[action.channelId],
        playing: true,
      },
    };

    case STOP_SOUND: return {
      ...state,
      [action.channelId]: {
        ...state[action.channelId],
        playing: false,
      },
    };

    case SET_VOLUME: return {
      ...state,
      [action.payload.channelId]: {
        ...state[action.payload.channelId],
        volume: action.payload.newVolume,
      },
    };


    default: return state;
  }
};