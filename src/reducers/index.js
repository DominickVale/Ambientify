import { combineReducers } from 'redux';

import { NUMBER_OF_CHANNELS } from '../constants/sounds';
import channelsReducer from './channels'
import settingsReducer from './settings'

// Initialize the state, fill it with the preferred number of channels with default settings
const initialState = {};

for (let i = 0; i < NUMBER_OF_CHANNELS; i++) {
  initialState[i] = {
    soundObject: 'NOT_INITIALIZED',
    loaded: false,
    playing: false,
    volume: 100,
  };
}

export default combineReducers({
  channels: channelsReducer,
  settings: settingsReducer,
});