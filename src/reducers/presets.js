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
      const savedState = Object.keys(channelsState).map((_, key) =>
        ({
          currentSoundCategory: channelsState[key].currentSoundCategory,
          currentSound: channelsState[key].currentSound,
          volume: channelsState[key].volume
        }))

      return {
        ...state,
        [action.payload.name]: savedState
      }
    default: return state;
  }
};