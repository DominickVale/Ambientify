import { ADD_PRESET, REMOVE_PRESET, DELETE_PRESET, ADD_CUSTOM_SOUND } from '../actions'
/**
 * TODO:
 * Implement settings
 */

const initialState = {
  customSounds: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRESET:
      const channelsState = action.payload.currentChannelsState
      const savedState = Object.keys(channelsState).map((_, key) => {
        return ({
          currentSoundCategory: channelsState[key].currentSoundCategory,
          currentSound: channelsState[key].currentSound,
          volume: channelsState[key].volume,
          playing: channelsState[key].playing,
          randomizing: channelsState[key].randomizing,
          loops: channelsState[key].loops,
          uri: channelsState[key].currentSoundCategory === 'CUSTOM' ? channelsState[key].file : false
        })
      }
      )
      return {
        ...state,
        [action.payload.name]: savedState
      }

    case DELETE_PRESET:
      const newState = { ...state };
      delete newState[action.payload.name]
      return newState

    case ADD_CUSTOM_SOUND: return ({
      ...state,
      customSounds: {
        ...state.customSounds,
        [action.payload.soundName]: {
          uri: `${action.payload.uri}`,
        }
      }
    })
    default: return state;
  }
};