import { Audio } from 'expo-av'
/**
 * TODO:
 * Add LOAD_SOUND
 * Add UNLOAD_SOUND
 * Add CHANGE_VOLUME
 * Add STOP_ALL_CHANNELS
 */

export const CHANNEL_INIT = 'CHANNEL_INIT';
export const LOAD_SOUND = 'LOAD_SOUND';
export const LOAD_SOUND_ERR = 'LOAD_SOUND_ERR';
export const TOGGLE_SOUND = 'TOGGLE_SOUND'

export const initChannel = (channelId, soundObject) => ({
  type: CHANNEL_INIT,
  payload: { soundObject },
  channelId
});

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

export const toggleSound = channelId => ({
  type: TOGGLE_SOUND,
  channelId
})
