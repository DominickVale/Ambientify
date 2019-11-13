import { ADD_PRESET, REMOVE_PRESET } from '../actions'
/**
 * TODO:
 * Implement settings
 */

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRESET: return {
      ...state,
      [action.payload.name]: {
        channels: action.payload.currentChannelsState
      }
    }
    default: return state;
  }
};