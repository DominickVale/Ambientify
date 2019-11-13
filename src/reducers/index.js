import { combineReducers } from 'redux';

import channelsReducer from './channels'
import presetsReducer from './presets'

export default combineReducers({
  channels: channelsReducer,
  presets: presetsReducer,
});