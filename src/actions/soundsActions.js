/**
 * TODO:
 * Add LOAD_SOUND
 * Add UNLOAD_SOUND
 * Add CHANGE_VOLUME
 * Add STOP_ALL_CHANNELS
 */

export const CHANNELS_INIT = 'CHANNEL_INIT';

export const initChannel = (channelId, soundObject) => ({
  type: CHANNELS_INIT,
  payload: { channelId, soundObject },
});