import { ADD_PRESET, REMOVE_PRESET } from '../actions'
/**
 * TODO:
 * Implement settings
 */

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRESET:
      const channelsState = action.payload.currentChannelsState
      return {
        ...state,
        [action.payload.name]: Object.keys(channelsState).map((_, key) =>
          ({
            currentSound: channelsState[key].currentSound,
            playing: channelsState[key].playing,
            volume: channelsState[key].volume
          }))
      }
    default: return state;
  }
};