import { CHANNEL_INIT, LOAD_SOUND } from '../actions'
import { NUMBER_OF_CHANNELS } from '../constants';
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
        soundObject: 'NOT_INITIALIZED',
        loaded: false,
        playing: false,
        volume: 100,
      },
 *    1: {
        soundObject: 'NOT_INITIALIZED',
        loaded: false,
        playing: false,
        volume: 100,
      },
      etc...
 * }
 */

for (let i = 0; i < NUMBER_OF_CHANNELS; i++) {
  initialState[i] = {
    soundObject: 'NOT_INITIALIZED',
    loaded: false,
    playing: false,
    volume: 100,
  };
}

export default (state = initialState, action) => {
  switch (action.type) {

    case CHANNEL_INIT: return {
      ...state,
      [action.payload.channelId]: {
        soundObject: action.payload.soundObject,
        loaded: false,
        playing: false,
        volume: 100,
      },
    };

    case LOAD_SOUND: return {
      ...state,
      [action.payload.channelId]: {
        ...state[action.payload.channelId],
        loaded: action.payload.newSound,
      },
    };

    default: return state;
  }
};