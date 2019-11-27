import { Audio } from 'expo-av'
import { merge } from 'lodash'

import { LOAD_SOUND, PLAY_SOUND, STOP_SOUND, SET_VOLUME, LOAD_PRESET, SET_LOOPS, TOGGLE_RANDOM } from '../actions'
import { NUMBER_OF_CHANNELS } from '../constants';
/**
 * TODO:
 * Add Settings
 */

// Initialize the state, fill it with the preferred number of channels with default settings
const initialState = {};

for (let i = 0; i < NUMBER_OF_CHANNELS; i++) {
  initialState[i] = {
    soundObject: new Audio.Sound(),
    file: false,
    loops: { times: 1, minutes: 1 },
    randomizing: false,
    currentSoundCategory: 'none',
    currentSound: 'none',
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
        currentSoundCategory: action.payload.newSoundCategory,
        currentSound: action.payload.newSoundName,
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

    case SET_LOOPS: return {
      ...state,
      [action.payload.channelId]: {
        ...state[action.payload.channelId],
        loops: action.payload.loops,
      },
    };

    case TOGGLE_RANDOM: return {
      ...state,
      [action.channelId]: {
        ...state[action.channelId],
        randomizing: !state[action.channelId].randomizing
      },
    };

    case LOAD_PRESET: return merge({}, state, action.payload.newChannelsState)

    default: return state;
  }
};