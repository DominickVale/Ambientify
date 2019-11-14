import { ADD_PRESET, REMOVE_PRESET, DELETE_PRESET } from '../actions'
/**
 * TODO:
 * Implement settings
 */

const initialState = []

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

    // TODO: FIX
    case DELETE_PRESET:
      return {
        ...Object.keys(state).filter(preset => preset != action.payload.name)
      }

    default: return state;
  }
};