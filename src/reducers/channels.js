import { LOAD_SOUND, LOAD_SOUND_ERR, TOGGLE_SOUND } from '../actions'
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
    volume: 100,
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

    case LOAD_SOUND_ERR: return {
      ...state,
      [action.channelId]: {
        ...state[action.channelId],
        file: "Already loaded",
      },
    };

    case TOGGLE_SOUND: return {
      ...state,
      [action.channelId]: {
        ...state[action.channelId],
        playing: !state[action.channelId].playing,
      },
    };


    default: return state;
  }
};