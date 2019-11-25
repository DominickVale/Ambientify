import { combineReducers } from 'redux';

import channelsReducer from './channels'
import presetsReducer from './presets'
import settingsReducer from './settings'

export default combineReducers({
  channels: channelsReducer,
  presets: presetsReducer,
  settings: settingsReducer
});