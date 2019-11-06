import { combineReducers } from 'redux';

import channelsReducer from './channels'
import settingsReducer from './settings'

export default combineReducers({
  channels: channelsReducer,
  settings: settingsReducer,
});