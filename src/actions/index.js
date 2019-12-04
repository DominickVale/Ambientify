/**
 * TODO:
 * Settings 
 */

export const LOAD_SOUND = 'LOAD_SOUND';
export const LOAD_SOUND_ERR = 'LOAD_SOUND_ERR';
export const PLAY_SOUND = 'PLAY_SOUND'
export const PLAY_SOUND_ALL = 'PLAY_SOUND_ALL'
export const STOP_SOUND = 'STOP_SOUND'
export const STOP_SOUND_ALL = 'STOP_SOUND_ALL'
export const SET_VOLUME = 'SET_VOLUME'
export const SET_LOOPS = 'SET_LOOPS'
export const TOGGLE_RANDOM = 'TOGGLE_RANDOM'

export const ADD_PRESET = 'ADD_PRESET'
export const LOAD_PRESET = 'LOAD_PRESET'
export const DELETE_PRESET = 'DELETE_PRESET'
export const ADD_CUSTOM_SOUND = 'ADD_CUSTOM_SOUND'
export const DELETE_CUSTOM_SOUND = 'DELETE_CUSTOM_SOUND'

export const TOGGLE_PITCH = 'TOGGLE_PITCH'

export const loadSound = (channelId, newSound, newSoundCategory, newSoundName) => async (dispatch, getState) => {
  if (newSoundCategory === 'CUSTOM') {
    newSound = getState().presets.customSounds[newSoundName]
  }
  dispatch({
    type: LOAD_SOUND,
    payload: { newSound, newSoundCategory, newSoundName },
    channelId
  })
}

export const playSound = channelId => ({
  type: PLAY_SOUND,
  channelId
})

export const stopSound = channelId => ({
  type: STOP_SOUND,
  channelId
})

export const playSoundAll = () => ({
  type: PLAY_SOUND_ALL
})

export const stopSoundAll = () => ({
  type: STOP_SOUND_ALL
})

export const setVolume = (channelId, newVolume) => ({
  type: SET_VOLUME,
  payload: { channelId, newVolume }
})

export const setLoops = (channelId, loops) => ({
  type: SET_LOOPS,
  payload: { channelId, loops }
})

export const toggleRandom = channelId => ({
  type: TOGGLE_RANDOM,
  channelId
})

export const addPreset = name => async (dispatch, getState) => {
  const currentChannelsState = getState().channels
  dispatch({
    type: ADD_PRESET,
    payload: { name, currentChannelsState }
  })
}

export const loadPreset = name => async (dispatch, getState) => {
  const newChannelsState = { ...getState().presets[name] }
  dispatch({
    type: LOAD_PRESET,
    payload: { name, newChannelsState }
  })
}

export const deletePreset = name => ({
  type: DELETE_PRESET,
  payload: { name }
})

export const addCustomSound = (soundName, uri) => ({
  type: ADD_CUSTOM_SOUND,
  payload: { soundName, uri }
})

export const deleteCustomSound = soundName => ({
  type: DELETE_CUSTOM_SOUND,
  payload: { soundName }
})

export const togglePitch = () => ({
  type: TOGGLE_PITCH,
})