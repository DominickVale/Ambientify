/**
 * TODO:
 * Fix loadSound
 */

export const LOAD_SOUND = 'LOAD_SOUND';
export const LOAD_SOUND_ERR = 'LOAD_SOUND_ERR';
export const PLAY_SOUND = 'PLAY_SOUND'
export const STOP_SOUND = 'STOP_SOUND'
export const SET_VOLUME = 'SET_VOLUME' //Only used by preset dispatches

// loadSound must be worked on. Planning on removing the sideEffect and corretly finishing listener on /components/LoadButton
// Currently loading sound even if it's already loaded.
export const loadSound = (channelId, soundObject, newSound) => async (dispatch) =>
  await soundObject.loadAsync(newSound).then(() => dispatch({
    type: LOAD_SOUND,
    payload: { newSound },
    channelId
  }));

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
