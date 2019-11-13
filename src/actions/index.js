/**
 * TODO:
 * Preset actions
 */

export const LOAD_SOUND = 'LOAD_SOUND';
export const LOAD_SOUND_ERR = 'LOAD_SOUND_ERR';
export const PLAY_SOUND = 'PLAY_SOUND'
export const STOP_SOUND = 'STOP_SOUND'
export const SET_VOLUME = 'SET_VOLUME' //Only used by preset dispatches

export const ADD_PRESET = 'ADD_PRESET'
export const REMOVE_PRESET = 'REMOVE_PRESET'

export const loadSound = (channelId, newSound, newSoundName) => ({
  type: LOAD_SOUND,
  payload: { newSound, newSoundName },
  channelId
})

export const playSound = channelId => ({
  type: PLAY_SOUND,
  channelId
})

export const stopSound = channelId => ({
  type: STOP_SOUND,
  channelId
})

export const setVolume = (channelId, newVolume) => ({
  type: SET_VOLUME,
  payload: { channelId, newVolume }
})

export const addPreset = name => async (dispatch, getState) => {
  const currentChannelsState = getState().channels
  dispatch({
    type: ADD_PRESET,
    payload: { name, currentChannelsState }
  })
}