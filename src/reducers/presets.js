import { ADD_PRESET, REMOVE_PRESET, DELETE_PRESET } from '../actions'
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
          volume: channelsState[key].volume,
          playing: channelsState[key].playing,
          looping: channelsState[key].looping,
          loops: channelsState[key].loops
        }))
      return {
        ...state,
        [action.payload.name]: savedState
      }

    case DELETE_PRESET:
      const newState = { ...state };
      delete newState[action.payload.name]
      return newState

    default: return state;
  }
};