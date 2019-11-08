/**
 * TODO:
 * Add LOAD_SOUND
 * Add UNLOAD_SOUND
 * Add CHANGE_VOLUME
 * Add STOP_ALL_CHANNELS
 */

export const LOAD_SOUND = 'LOAD_SOUND';
export const LOAD_SOUND_ERR = 'LOAD_SOUND_ERR';
export const PLAY_SOUND = 'PLAY_SOUND'
export const STOP_SOUND = 'STOP_SOUND'

export const loadSound = (channelId, soundObject, newSound) => async (dispatch) =>
  await soundObject.loadAsync(newSound).then(() => dispatch({
    type: LOAD_SOUND,
    payload: { newSound },
    channelId
  }),
    (err) => dispatch({
      type: LOAD_SOUND_ERR,
      payload: { err },
      channelId
    })
  );

export const playSound = channelId => ({
  type: PLAY_SOUND,
  channelId
})
export const stopSound = channelId => ({
  type: STOP_SOUND,
  channelId
})
