import { ADD_PRESET, DELETE_PRESET, ADD_CUSTOM_SOUND, DELETE_CUSTOM_SOUND } from '../actions'


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

    case DELETE_CUSTOM_SOUND:
      const { [action.payload.soundName]: _, ...newCustomSounds } = state.customSounds;
      return { ...state, ['customSounds']: newCustomSounds }

    default: return state;
  }
};